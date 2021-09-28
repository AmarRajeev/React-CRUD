using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ChallengeProject.Models
{
    public class Store
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        //public Sales ProductSold { get; set; }

       
    }
}
