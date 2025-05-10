using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;

namespace SorbilPortfolioProject.Controllers
{
    public class AdminContactController : Controller
    {
        Context context = new Context();
        int id = 1;
        public IActionResult Index()
        {
            var values = context.Contacts.Find(id);
            return View(values);
        }

        [HttpPost]
        public IActionResult Index(Contact contact)
        {
            var values = context.Contacts.Find(id);
            values.Email = contact.Email;
            values.Phone = contact.Phone;
            values.Address = contact.Address;

            context.SaveChanges();
            return View(values);
        }
    }
}
