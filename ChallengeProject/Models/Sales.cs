using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChallengeProject.Models
{
    public class Sales
    {
        [Key]
        public int Id { get; set; }
        public int Productid { get; set; }
     
        public Product Product { get; set; }
        public int Customerid { get; set; }
      
        public Customer Customer { get; set; }
        
        public int Storeid { get; set; }
       
        public Store Store { get; set; }
        public String DateSold { get; set;}

       
    }
}
