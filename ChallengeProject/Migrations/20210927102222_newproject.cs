using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ChallengeProject.Migrations
{
    public partial class newproject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_Sales_SalesId",
                table: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Productid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Storeid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Customer_SalesId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "SalesId",
                table: "Customer");

            migrationBuilder.AlterColumn<string>(
                name: "DateSold",
                table: "Sales",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Productid",
                table: "Sales",
                column: "Productid");

            migrationBuilder.CreateIndex(
                name: "IX_Sales_Storeid",
                table: "Sales",
                column: "Storeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Sales_Productid",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_Storeid",
                table: "Sales");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateSold",
                table: "Sales",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SalesId",
                table: "Customer",
                type: "int",
                nullable: true);

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
