using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Productid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Storeid",
                table: "Sales");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Productid",
                table: "Sales",
                column: "Productid",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Storeid",
                table: "Sales",
                column: "Storeid",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Productid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Storeid",
                table: "Sales");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Productid",
                table: "Sales",
                column: "Productid");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Storeid",
                table: "Sales",
                column: "Storeid");
        }
    }
}
