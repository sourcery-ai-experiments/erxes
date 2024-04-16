import React from 'react';

const getNum = (n) => {
  return (n || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const getRows = receipts => {
  let res = '';
  let ind = 0;
  const subChecker = receipts.length > 1 ? true : false
  for (const receipt of receipts) {
    if (subChecker) {
      res = res.concat(`<tr>
        <td colspan="4">ДДТД: ${receipt.id || ''}</td>
      </tr>`)
    }
    for (const item of receipt.items) {
      ind += 1;
      res = res.concat(`
      <tr class="inventory-info">
        <td colspan="4">
          ${ind}. ${item.name}
        </td>
      </tr>
      <tr class="right">
        <td class="right">${getNum(item.unitPrice)}</td>
        <td class="right">${item.qty}</td>
        <td class="right">${getNum(item.totalVAT)}</td>
        <td class="right">${getNum(item.totalAmount)}</td>
      </tr>
      `);
    }
    if (subChecker) {
      res = res.concat(`<tr>
        <td class="right" colspan="2">Дэд нийт:</td>
        <td class="right">${getNum(receipt.totalVAT)}</td>
        <td class="right">${getNum(receipt.totalAmount)}</td>
      </tr>`)
    }
  }
  return res;
};

export default (response, counter?) => {
  return `
    <div class="receipt" id="${(response._id || '')
      .toString()
      .replace('.', '')}">
      ${(counter > 0 && '<div class="splitter"></div>') || ''}
      <div class="center">
        <img src="https://nmgplugins.s3.us-west-2.amazonaws.com/ebarimt/ebarimt.png">
      </div>
      <p class="center">
        ${response.companyName ? response.companyName : ''}
      </p>

      <p class="center">
        ${response.status !== 'SUCCESS' ? response.message : ''}
      </p>

      ${response.id
      ? `
            <div>
              <p>ТТД: ${response.merchantTin}</p>
              ${(response.id && `<p>ДДТД: ${response.id}</p>`) || ''}
              <p>Огноо: ${response.date}</p>
              ${(response.number && `<p>№: ${response.number}</p>`) || ''}
            </div>

            ${response.customerNo || response.customerName
        ? `<div>
                <br />
                <p><strong>Худалдан авагч:</strong></p>
                ${response.customerNo
          ? `<p>ТТД: ${response.customerNo}</p>`
          : ''
        }
                ${response.customerName
          ? `<p>Нэр: ${response.customerName} </p>`
          : ''
        }
                <br />
              </div>`
        : ''
      }

            <table class="tb" cellpadding="0" cellspacing="0">
              <thead>
                <tr class="text-center">
                  <th>Нэгж үнэ</th>
                  <th>Тоо</th>
                  <th>НӨАТ</th>
                  <th>Нийт үнэ</th>
                </tr>
              </thead>
              <tbody>
              ${getRows(response.receipts || [])}
              </tbody>
            </table>

            <div class="total">
              <p><label>НӨАТ:</label> ${getNum(response.totalVAT)}</p>
              <p><label>НХАТ:</label> ${getNum(response.totalCityTax)}</p>
              <p><label>Бүгд үнэ:</label> ${getNum(response.totalAmount)}</p>
            </div>

            <div class="center barcode">
              <div class="lottery">
                ${response.lottery ? `Сугалаа: ${response.lottery}` : ''}
              </div>

              ${response.qrData
        ? `
                    <canvas id="qrcode${(response._id || '')
          .toString()
          .replace('.', '')}"></canvas>
                  `
        : ''
      }

              <p>Манайхаар үйлчлүүлсэн танд баярлалаа !!!</p>
            </div>
          `
      : `
            Буцаалт амжилттай.
          `
    }
    </div>
    <script>
      window.onbeforeunload = function () {
        return 'Уг цонхыг хаавал энэ баримтыг ахиж хэвлэх боломжгүй болохыг анхаарна уу';
      }

      ${response.qrData
      ? `
        // QRCODE
        var canvas = document.getElementById("qrcode${(
        response._id || ''
      )
        .toString()
        .replace('.', '')}");
        var ecl = qrcodegen.QrCode.Ecc.LOW;
        var text = '${response.qrData}';
        var segs = qrcodegen.QrSegment.makeSegments(text);
        // 1=min, 40=max, mask=7
        var qr = qrcodegen.QrCode.encodeSegments(segs, ecl, 1, 40, 2, false);
        // 4=Scale, 1=border
        qr.drawCanvas(4, 0, canvas);

        $("#qrcode${(response._id || '')
        .toString()
        .replace(
          '.',
          ''
        )}").after('<img src="' + canvas.toDataURL() + '" />')
      `
      : ''
    }
    </script>
  `;
};
