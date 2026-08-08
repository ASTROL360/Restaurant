import { useState } from "react";
import { sendReservation } from "../api/reservation.js";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
};

export default function ReservationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const data = await sendReservation(form);
      setStatus({ type: "success", message: data.message || "Reservation Sent Successfully!" });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation" className="reservation">
      <div className="reservation-text">
        <p className="eyebrow">Reservations</p>
        <h2>Book your table</h2>
        <p>
          Reserve your table in seconds and let us take care of the rest. We
          look forward to hosting you.
        </p>
        <div className="reservation-info">
          <p>
            <strong>Lunch</strong> 12:00 PM — 3:00 PM
          </p>
          <p>
            <strong>Dinner</strong> 6:00 PM — 11:00 PM
          </p>
          <p>
            <strong>Phone</strong> +1 (555) 019-2834
          </p>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="08012345678"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{11}"
              maxLength={11}
              title="Phone number must contain exactly 11 digits"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {status && (
          <div className={`form-alert ${status.type}`} role="alert">
            {status.message}
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          {loading ? "Sending..." : "Send Reservation"}
        </button>
      </form>
    </section>
  );
}
