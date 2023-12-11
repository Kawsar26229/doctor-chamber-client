import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const appointment = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };

    fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            Swal.fire({
                title: "Done!",
                text: "Booking Appointment Successful.",
                icon: "success"
              });
        }
    })
    .catch(error => {
        console.log('Booking Failed', error);
    })
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={`$${price}`}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-block btn-warning"
          />
        </div>
      </form>
    </div>
  );
};

export default Appointment;
