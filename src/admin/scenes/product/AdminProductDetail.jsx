import React from 'react'

export default function AdminProductDetail() {
  return (
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Large Modal</h4>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
          <tbody>
            <tr>
              <th>Brand:</th>
              <td>419</td>
            </tr>
            <tr>
              <th>Category:</th>
              <td>4</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>"FGO"</td>
            </tr>
            <tr>
              <th>Detail:</th>
              <td>"FGO"</td>
            </tr>
            <tr>
              <th>Image:</th>
              <td>(3) [undefined, undefined, undefined]</td>
            </tr>
            <tr>
              <th>Price:</th>
              <td>"5000000"</td>
            </tr>
            <tr>
              <th>Product Name:</th>
              <td>"FGO"</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  );
}
