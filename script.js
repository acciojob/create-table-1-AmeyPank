function insert_Row() {
    //Write your code here

	let str = document.querySelector("#sampleTable").innerHTML;

    let nstr = `<tr>
                 <td>New Cell1</td>
                 <td>New Cell2</td>
                 </tr>`

    document.querySelector("#sampleTable").innerHTML = nstr + str;
  
}