import React from 'react';
import Layout from '../layout';

const Dashboard = () => {
    return (
        <Layout title="Add Tour">
            <div className="row">
                
                <div className="col-xl-12">
                    {/* Account details card*/}
                    <div className="card mb-4">
                        <div className="card-header">Add Tour</div>
                        <div className="card-body">
                            <form>
                                {/* Form Row*/}
                                <div className="row gx-3 mb-3">
                                    {/* Form Group (first name)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue />
                                    </div>
                                    {/* Form Group (last name)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue />
                                    </div>
                                </div>
                                {/* Form Group (email address)*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue />
                                </div>
                                {/* Form Group (Group Selection Checkboxes)*/}
                                <div className="mb-3">
                                    <label className="small mb-1">Group(s)</label>
                                    <div className="form-check">
                                        <input className="form-check-input" id="groupSales" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="groupSales">Sales</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" id="groupDevs" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="groupDevs">Developers</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" id="groupMarketing" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="groupMarketing">Marketing</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" id="groupManagers" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="groupManagers">Managers</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" id="groupCustomer" type="checkbox" defaultValue />
                                        <label className="form-check-label" htmlFor="groupCustomer">Customer</label>
                                    </div>
                                </div>
                                {/* Form Group (Roles)*/}
                                <div className="mb-3">
                                    <label className="small mb-1">Role</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected disabled>Select a role:</option>
                                        <option value="administrator">Administrator</option>
                                        <option value="registered">Registered</option>
                                        <option value="edtior">Editor</option>
                                        <option value="guest">Guest</option>
                                    </select>
                                </div>
                                {/* Submit button*/}
                                <button className="btn btn-primary" type="button">Add user</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Dashboard;