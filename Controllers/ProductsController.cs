using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EcommerceAPI.Data;
using EcommerceAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcommerceAPI.Controllers
{
    
    public class ProductsController(StoreContext context) : BaseApiController
    {
        [HttpGet]

        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            var product = await context.Products.FindAsync(id);

            if(product == null) return NotFound();

            return product;
        }
    }
}