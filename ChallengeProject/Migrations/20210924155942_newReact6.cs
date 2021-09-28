using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Sales_Customerid",
                table: "Sales",
                column: "Customerid");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Storeid",
                table: "Sales",
                column: "Storeid");

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_Customer_Customerid",
                table: "Sales",
                column: "Customerid",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_Store_Storeid",
                table: "Sales",
                column: "Storeid",
                principalTable: "Store",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sales_Customer_Customerid",
                table: "Sales");

            migrationBuilder.DropForeignKey(
                name: "FK_Sales_Store_Storeid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Customerid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Storeid",
                table: "Sales");
        }
    }
}
