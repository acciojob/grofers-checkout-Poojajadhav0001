const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices =document.querySelectorAll(".price");


	//calculate the sum of all prices
	let total = 0;
	prices.foreach( => {
		total += parseInt(price.textContent);
		
	});
	const table =document.querySelector("table");
	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");


  newCell.setAttribute("colspan", "2");
  newCell.style.fontWeight = "bold";
  newCell.textContent = "Total Price: Rs " + total;

// Append cell to row, then row to table
  newRow.appendChild(newCell);
  table.appendChild(newRow);
};


getSumBtn.addEventListener("click", getSum);

