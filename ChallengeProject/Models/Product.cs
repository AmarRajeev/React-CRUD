using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ChallengeProject.Models
{
    public partial class Product
    {   [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
       // public Sales ProductSold { get; set; }
    }
}
