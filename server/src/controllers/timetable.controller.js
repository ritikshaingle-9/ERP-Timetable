const db = require("../config/db");

//---------------------CREATE---------------------//
exports.createEntry = (req, res) => {
  const { class_id, day_of_week, timeslot_id, subject_id, teacher_id } = req.body;

  const teacherQuery =
    "SELECT * FROM timetable WHERE teacher_id=? AND day_of_week=? AND timeslot_id=?";

  db.query(teacherQuery, [teacher_id, day_of_week, timeslot_id], (err, tResult) => {
    if (tResult.length > 0) {
      return res.status(400).json({ message: "Teacher already assigned at this time" });
    }

    const classQuery =
      "SELECT * FROM timetable WHERE class_id=? AND day_of_week=? AND timeslot_id=?";

    db.query(classQuery, [class_id, day_of_week, timeslot_id], (err, cResult) => {
      if (cResult.length > 0) {
        return res.status(400).json({ message: "Class already has subject in this period" });
      }

      const insertQuery =
        "INSERT INTO timetable (class_id, day_of_week, timeslot_id, subject_id, teacher_id) VALUES (?,?,?,?,?)";

      db.query(
        insertQuery,
        [class_id, day_of_week, timeslot_id, subject_id, teacher_id],
        () => res.status(201).json({ message: "Timetable entry created" })
      );
    });
  });
};

//---------------------READ---------------------//
exports.getByClass = (req, res) => {
  const classId = req.params.classId;

  const query = `
    SELECT * FROM timetable 
    WHERE class_id = ?
  `;

  db.query(query, [classId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

//---------------------UPDATE---------------------//
exports.updateEntry = (req, res) => {
  const id = req.params.id;
  const { subject_id, teacher_id } = req.body;

  const query =
    "UPDATE timetable SET subject_id=?, teacher_id=? WHERE id=?";

  db.query(query, [subject_id, teacher_id, id], () =>
    res.json({ message: "Timetable updated" })
  );
};

// ---------------------DELETE---------------------//
exports.deleteEntry = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM timetable WHERE id=?", [id], () =>
    res.json({ message: "Timetable deleted" })
  );
};
