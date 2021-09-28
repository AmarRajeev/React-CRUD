using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
//using System.Data.Entity;

using System.Data;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ChallengeProject.Models
{
    public partial class ReactDataBaseContext : DbContext
    {
        public ReactDataBaseContext()
        {
        }

        public ReactDataBaseContext(DbContextOptions<ReactDataBaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Store> Store { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }


        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    //Configure default schema
        //    modelBuilder.HasDefaultSchema("Admin");

        //    //Map entity to table
        //    modelBuilder.Entity<Student>().ToTable("StudentInfo");
        //    modelBuilder.Entity<Standard>().ToTable("StandardInfo", "dbo");
        //}
        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //                optionsBuilder.UseSqlServer("Server=DESKTOP-EJ43RD9;Database=ReactDataBase;Integrated Security=True");
        //            }
        //        }

        //    protected override void OnModelCreating(ModelBuilder modelBuilder)
        //    {
        //        modelBuilder.Entity<Customer>(entity =>
        //        {
        //            entity.Property(e => e.Address)
        //                .IsRequired()
        //                .HasMaxLength(255)
        //                .IsUnicode(false);

        //            entity.Property(e => e.Name)
        //                .IsRequired()
        //                .HasMaxLength(255)
        //                .IsUnicode(false);
        //        });

        //        modelBuilder.Entity<Product>(entity =>
        //        {
        //            entity.Property(e => e.Name)
        //                .IsRequired()
        //                .HasMaxLength(255)
        //                .IsUnicode(false);

        //            entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");
        //        });

        //        OnModelCreatingPartial(modelBuilder);
        //    }

        //    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
        //}
    }
}
