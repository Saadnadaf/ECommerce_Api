using EcommerceAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcommerceAPI.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }        
    }
}