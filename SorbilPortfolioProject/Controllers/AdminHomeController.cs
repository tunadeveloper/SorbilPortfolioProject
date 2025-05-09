using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;

namespace SorbilPortfolioProject.Controllers
{
    public class AdminHomeController : Controller
    {
        Context context = new Context();
        int id = 1;
        [HttpGet]
        public IActionResult UpdateHome()
        {
            
            var value = context.Homes.Find(id);
            return View(value);
        }

        [HttpPost]
        public IActionResult UpdateHome(Home home)
        {
            var value = context.Homes.Find(id);
            value.NameSurname = home.NameSurname;
            value.PositionName = home.PositionName;
            value.ImageUrl = home.ImageUrl;

            context.SaveChanges();
            return RedirectToAction("UpdateHome");
        }


    }
}
