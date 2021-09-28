using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Customerid",
                table: "Sales");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Customerid",
                table: "Sales",
                column: "Customerid",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Customerid",
                table: "Sales");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Customerid",
                table: "Sales",
                column: "Customerid");
        }
    }
}
