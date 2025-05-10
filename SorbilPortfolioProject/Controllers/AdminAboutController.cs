using Microsoft.AspNetCore.Mvc;
using SorbilPortfolioProject.Models;
using System.Drawing;

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
            var values = context.Abouts.Find(id);

            values.Description = about.Description;
            values.ImageUrl = about.ImageUrl;

            context.SaveChanges();
            return View(values);
        }
    }
}
