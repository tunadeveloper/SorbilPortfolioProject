using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;

namespace SorbilPortfolioProject.Controllers
{
    public class AdminHomeController : Controller
    {
        Context context = new Context();
        public IActionResult Index()
        {
            var values = context.Homes.Find(1);
            return View(values);
        }

        [HttpPost]
        public IActionResult Index(Home home)
        {
            var values = context.Homes.Find(1);
            values.NameSurname = home.NameSurname;
            values.PositionName = home.PositionName;
            values.ImageUrl = home.ImageUrl;

            context.SaveChanges();
            return View(values);
        }
    }
}
