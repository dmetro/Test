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
    public IHttpActionResult GetProducts(dynamic obj)
    {
        try
        {
            var items = StoreItem.GetItemsLazyLoading(obj.skip, obj.take);
            return Ok(new { Error = "", data = items });
        }
        catch (Exception exs)
        {
            return InternalServerError(new Exception(exs.Message + "getproducts"));
        }
    }
}
