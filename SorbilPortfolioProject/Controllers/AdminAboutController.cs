using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;

namespace SorbilPortfolioProject.Controllers
{
    public class AdminAboutController : Controller
    {
        Context context = new Context();
        int id = 3;
        public IActionResult Index()
        {
            var values = context.Abouts.Find(id);
            return View(values);
        }

        [HttpPost]
        public IActionResult Index(About about)
        {
            var value = context.Abouts.Find(id);

            value.Description = about.Description;
            value.ImageUrl = about.ImageUrl;

            context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
