using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;

namespace SorbilPortfolioProject.Controllers
{
    public class DefaultController : Controller
    {
        Context context = new Context();
        public IActionResult Home()
        {
            var values = context.Homes.ToList();
           ViewBag.AboutList = context.Abouts.ToList();
            ViewBag.ContactList = context.Contacts.ToList();
            return View(values);
        }

        public PartialViewResult Head()
        {
            return PartialView();
        }

        public PartialViewResult Header()
        {
            return PartialView();
        }

        public PartialViewResult About()
        {
            return PartialView();
        }

        public PartialViewResult Contact()
        {
            return PartialView();
        }
    }
}
