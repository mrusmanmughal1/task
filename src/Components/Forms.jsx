const Forms = () => {
  return (
    <div className="forms">
        <div className="form-layout">
      <form>
         
          <div className="account-type">
            <label className="flex">
              <p >Account Type</p>
              <span>Choose account type.</span>
            </label>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <input type="checkbox" className="check-box" name="Candidate" id="Candidate" />
                <label id="Employee" for="Candidate"> Candidate</label>

              </div>
              <div className="flex gap-2">
                <input type="checkbox"  className="check-box"id="Employee" name="Employee" />
                <label for="Employee"> Employee</label>

              </div>
            </div>
          </div>
        <div className="form-input">
            <label htmlFor="">User Name <span>Enter your username.</span></label>
            <br/>
            <input type="text" className="input"  placeholder="USER NAME"/>
        </div>

        <div className="form-input">
            <label htmlFor="">Email Address<span>  (In Case of Employer, User must have Company Email Address)</span></label>
            <br/>
            <input type="text" className="input"  placeholder="EMAIL ADDRESS"/>
        </div>

        <div className="form-input">
            <label htmlFor="">Password<span>   Enter your password.</span></label>
            <br/>
            <input type="text" className="input"  placeholder="PASSWORd"/>
        </div>

        <div className="form-input">
            <label htmlFor="">Confirm Password<span>   Enter confirm password.</span></label>
            <br/>
            <input type="text" className="input"  placeholder="Confirm Password"/>
        </div>
        {/* names  */}
        <div className="flex">
        <div className="form-input">
            <label htmlFor="">First Name <span>   Enter your first name</span></label>
            <br/>
            <input type="text" className="input"  placeholder="first name"/>
        </div>
        <div className="form-input">
            <label htmlFor="">Last Name <span>   Enter your last name</span></label>
            <br/>
            <input type="text" className="input"  placeholder="last name"/>
        </div>

        </div>
        <div className="form-input">
            <label htmlFor="">Specializations <span>   Select your specializations.</span></label>
            <br/>
            <input type="text" className="input"  placeholder="Specializations"/>
        </div>
        <div className="btn-submit">
            <button className="btn">Register Now</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Forms;
