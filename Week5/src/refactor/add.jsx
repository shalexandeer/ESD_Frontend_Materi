import React from 'react';

const TambahLomba = () => {
  return (
    <div>
      <h1>Tambah Lomba</h1>
      <form action="" method="post">
        <table>
          <tr>
            <td width="120">ID</td>
            <td><input type="number" /></td>
          </tr>

          <tr>
            <td>Title</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Category</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Description</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>Registration Fee</td>
            <td><input type="number" /></td>
          </tr>

          <tr>
            <td>Prize</td>
            <td><input type="number" /></td>
          </tr>

          <tr>
            <td>Registration Deadline</td>
            <td><input type="date" /></td>
          </tr>

          <tr>
            <td></td>
            <td><input type="submit" value="simpan" /></td>
          </tr>

        </table>
      </form>
    </div>
  );
};

export default TambahLomba;
