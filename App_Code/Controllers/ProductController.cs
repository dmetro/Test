using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

[RoutePrefix("api/product")]
public class ProductController : ApiController
{
    [HttpPost]
    [Route("getproducts")]
    public IHttpActionResult GetProducts([FromBody] dynamic obj)
    {
        try
        {
            return Ok(new { Error = "", data = "Ok" });
        }
        catch (Exception exs)
        {
            return InternalServerError(new Exception(exs.Message + "getproducts"));
        }
    }
}
