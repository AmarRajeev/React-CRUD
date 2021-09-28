using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Customerid",
                table: "Sales");

            migrationBuilder.AddColumn<int>(
                name: "SalesId",
                table: "Customer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Customerid",
                table: "Sales",
                column: "Customerid");

            migrationBuilder.CreateIndex(
                name: "IX_Customer_SalesId",
                table: "Customer",
                column: "SalesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customer_Sales_SalesId",
                table: "Customer",
                column: "SalesId",
                principalTable: "Sales",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_Sales_SalesId",
                table: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Customerid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Customer_SalesId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "SalesId",
                table: "Customer");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Customerid",
                table: "Sales",
                column: "Customerid",
                unique: true);
        }
    }
}
