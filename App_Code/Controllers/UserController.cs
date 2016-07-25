using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

[RoutePrefix("api/user")]
public class UserController : ApiController
{
    [HttpPost]
    [Route("login")]
    public IHttpActionResult Login([FromBody] dynamic obj)
    {
        try
        {
            //cretaabusinesses();
            //cretaBranches();
            //string user = obj.userName;
            //string password = obj.userPassword;
            //var user = null;
            //var user_ = null;

            //if (user_ != null)
            //{
            //    return Ok(new { Error = "", data = user_.Id });
            //}
            //else
            //{
            //   
            //}
            return Ok(new { Error = "User not exist", data = "" });
        }
        catch (Exception exs)
        {
            return InternalServerError(new Exception(exs.Message + "Login"));
        }
    }


    [HttpPost]
    [Route("Register")]
    public async Task<IHttpActionResult> Registretion([FromBody] dynamic user)
    {
        //test
        return StatusCode(System.Net.HttpStatusCode.Accepted); 
    }



}