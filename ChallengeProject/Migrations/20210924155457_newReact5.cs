using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Productid = table.Column<int>(nullable: false),
                    Customerid = table.Column<int>(nullable: false),
                    Storeid = table.Column<int>(nullable: false),
                    DateSold = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sales_Product_Productid",
                        column: x => x.Productid,
                        principalTable: "Product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Productid",
                table: "Sales",
                column: "Productid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sales");
        }
    }
}
