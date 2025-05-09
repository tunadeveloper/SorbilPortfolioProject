using Microsoft.EntityFrameworkCore;

namespace SorbilPortfolioProject.Models
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=TUNA\\SQLEXPRESS;database=SorbilPortfolyoProjesi;Integrated Security=True");
        }

        public DbSet<Home> Homes { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Contact> Contacts{ get; set; }
    }
}
