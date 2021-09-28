using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newReact14 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_Sales_SalesId",
                table: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Customer_SalesId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "SalesId",
                table: "Customer");

            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                table: "Customer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Customer_CustomerId",
                table: "Customer",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customer_Customer_CustomerId",
                table: "Customer",
                column: "CustomerId",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_Customer_CustomerId",
                table: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Customer_CustomerId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Customer");

            migrationBuilder.AddColumn<int>(
                name: "SalesId",
                table: "Customer",
                type: "int",
                nullable: true);

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
    }
}
