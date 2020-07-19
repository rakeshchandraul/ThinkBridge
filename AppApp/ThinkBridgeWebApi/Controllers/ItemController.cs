using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ThinkBridgeWebApi.Models;

namespace ThinkBridgeWebApi.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ItemController : ApiController
    {
        // GET: api/Employee
        public List<Item> GetItem()
        {
            using (var context = new ThinkBridgeDBEntities())
            {
                var data = context.Items.ToList<Item>();
                return data;
            }
        }

        // GET: api/Employee/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employee
        public Item Post(Item item)
        {
            using (var context = new ThinkBridgeDBEntities())
            {
                var existingStudent = context.Items.Where(s => s.itemid == item.itemid).FirstOrDefault<Item>();
                if (existingStudent != null)
                {
                    existingStudent.itemname = item.itemname;
                    existingStudent.price = item.price;
                    existingStudent.description = item.description;
                    context.SaveChanges();
                }
                else
                {
                    context.Items.Add(item);
                    context.SaveChanges();
                }
            }
            return item;
        }

        // PUT: api/Employee/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
        }
    }
}
