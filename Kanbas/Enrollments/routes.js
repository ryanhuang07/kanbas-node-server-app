import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/enroll", async (req, res) => {
        const { userId, courseId } = req.body;
        try {
            const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
            res.send(status);
        } catch (error) {
            res.send({ error: "Failed to enroll user." });
        }
    });

    app.delete("/api/enrollments/unenroll", async (req, res) => {
        const { userId, courseId } = req.body;
        try {
            const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
            res.send(status);
        } catch (error) {
            res.send({ error: "Failed to unenroll user." });
        }
    });

    app.get("/api/enrollments", async (req, res) => {
        try {
            const enrollments = await enrollmentsDao.getEnrollments();
            res.send(enrollments);
        } catch (error) {
            res.send({ error: "Failed to fetch enrollments." });
        }
    });
}
