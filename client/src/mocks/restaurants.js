
export default [
    {
      id: '1',
      name: 'Mayta',
      description:
        'Matya, que significa Tierra Noble en el idioma aymara, es una expresion personal y contemporanea de la gastronomia y territorio peruano',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png',
      distance: '500m',
      payment: ['online', 'cash', 'card'],
      tables: '5',
  
      menu: {
        Entradas: [
          {
            id: '1.1',
            name: 'Big Mc',
            description:
              'Papa andina mediana, con aceituna, huevo y toque de leche.',
            imageDish:
              'https://trending-media.com/wp-content/uploads/2020/11/McDonalds-PedidosYA-transp.png',
            price: 13.9,
            orderStatus: 'Entregado',
          },
          {
            id: '1.2',
            name: 'Cuarto de Libra',
            description: 'Macerado de ceviche concentrado, con su toque de ají.',
            imageDish:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYYGBgaHBweHRwaGhwaGh0eHBoZHBodGBocIS4lHB4rIRkaJzgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA5EAABAwIEBAQEBAYDAQEBAAABAAIRAyEEEjFBBQZRYSJxgZETMqGxQsHR8AcUUmJy4RaS8SOCFf/EABkBAAIDAQAAAAAAAAAAAAAAAAACAQMEBf/EACgRAAICAQMEAQQDAQAAAAAAAAABAgMREiExBBNBUSIUMmGRBUKxUv/aAAwDAQACEQMRAD8A9mQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQkTdWs1olzg0DckBADiFRYnmig3Rxd/iP1Vfjea3tAcyicp0c46+glI7IryOqpPwa1CwlLnJ8nO1sbZRJ8rlMVub6pa3KYdJmzSI2hJ34ln09no9CRK8zrc14h2jsttgCT3uE5R45XeS11cs0kRldFrgmIR3oh9PJcnpCF5hjOPvY+KdV8DqZm1zO90+ea6xLctSSdczWsb9TdHeiR2JHo6VYWrzRiKbA9zad7QbGfe/kElPn02zUR3h31CbuxI7M/CN2hZLB8603uhzCwf1TmjzAVvguP4eq7KyoM2sG33TKUXwxHCS5RboXIMpUwoqEIQAIQhAAhCEACEIQAIQhACIQq7iXFGUR4iJIkCYUSkorLJUXJ4RPc6FR8T5kp0hYFx6aep7LNY3jNbEv+Gw5WnYGBA1Ljus9iXEOLZmCRI0tayyWdUkvibKuly/kafiHMrjTBDyHO0a2wb5nX96LN4jGPeZe5zvMz90OwcUhUzNlxIy7iCb/T6qM2kTpJ1KyTvk+TbXRCPBPp0mhud72HcMBJJ7OjRcOxj3nIHBrXkCBZuwuRso4Z/wCLplNV90fQh7EcMe12UQ/u0z5wNY7pgYYqZhXfDMsOUxrrI6Gdk618kuJkkyT1VmqL4F+S5EwdJrWklri8GWuBsP8AIHUJvF0nvMuInsIVnTxADCzKDOhmCJjXyhKSzJmBJIsSRDQf6b3OqsymuSl7PLRR0MJleCWhwBnK7Q9iusc0uNqVNg/sBnyKuKTQ6btBHX8ly0NJiWjvNh5m6leiW9yhbUe1pZlZe0lgLh5E6LhmDdGdzHFgIBg3/wBea0NXDsmJaf8AFwcD7Jp1MgFrXOaHagHWEedwztsVbuKMYx7GUg3NYeMmd5cYk6mypxiHAyCdbLRvjI2m+nLQSXOYBnd0AnTW6qcXhxmORpDdg6J9YU6mQorL2JeH49iMO+TLAYJaLNNtg7MAfJXvCue3AkVWuc0nXwgtG/y6rFVqZcNXW2kkegSYSmwOJqZ8gBGZonK4jwz+m/dPGySElTFrdHtWC4zQqtDmPaQbXMGb2g72KsZXz/RxzmSGulp6ix6EtP8A6t3w7m2rQyNxADmOaC1zTcAgddY6FXxuT5Ms6HHg9GQoeAx7KzA+m4OafcdiNipivM4IQhAAhCEAIhCj4rENY0uP7KhvC3BLJG4lxBtMET4osPtbfyWA4k57nEvdmcdT07D9Fa4gue4vcTM2PTyUV2E3XLvulPZcHSorjDd8lO7CuEG4B07jsufgK7r0y8idgAB0ATmG4aX+Q3KyaW3hGnuJLLKL4FlJpvyscwNAzaneOisWYSU5U4c7WDdSoS5QOyL5KM0ui7GHuBpMCdh3Kt6eDXZwiFBg7UQ+I8KdSaH5w4exv0vcKCAVbvwYOy4/lVY45eywIp7bsr61NzA0n8Qt6f8AqiucZ/dleY4OeWzADRtuYAk+31UN+FRKOHsTGWV8iudVJ1v2T9Bjy1zmizdf9JalDsj4jmsc0GA6xt56dNVEXvuM91sNCo4ND8sB2lolKMYkxeIc9rGQAGdNTAgT0UD4eqZyw9iIrPJY/wA6OqMS0fCZVDpzOLSI0I7/AL1VYGmUOGvvG09Y6poz9hKPoQuE9E1UrvDXMYZFT5mgAzGhbuDqmqo1K6wGLNJ7agGbLNtJkEfmmjLcGtiEK7AzK6m15JJDszmuBO1tQojqp6m370UnEkue5xAGZxdA0EnZRvh+K4t9+0p1IXBb8C5krYdwyOt0OhvMHqO3ey9f4Bx6nimBzDDt2k3Hl1HdeLcV4cxgZVpEmm/QG5Y7dpO8RbyXPC8a6k9rmkgtMgjUEfvRXwsaeGZrKoyWVyfQSVQ+G4ttamyo0y1wB/Ue6mLWtzA1gVCEKQEVZxhsho2k28lZqs4yQGhziAGzJOgsks+1jQ+5FOaY2EDolewFobH4pPsYRhsQx7czHBwUhoELAoqXBsbcdn4IQoJ6myLbbjqnHEBdBEYKLIlJsZewF0gQIgALoMPUpxdT7plHfJGRhlGdLlD6UahPUrap14kfZNGtNCOxpkFzAmcgXD+Jsa/I85XjUEEe3Ud06XjWZSfF8F2JJZYyWXiN00+nDhmtKkyFw5omd+6VxDUQqlFRnYZWbwmSEjgh1NlS/Dapg4ZXNVijloS6B1MrBh13j3NfkyiCBB7afmpYAuotSLqVHAassj4KoKb8xaDYgiAddxKhY/I55LBlafS/UDZTKkXUOo8KVlLA2d8kN9NOY/h4Y1jg6XOEkbCbtj0XRSPJMSSY0E6J1EVyZC+FaLx07+SRlC6msYnWMupwLqNr/DXGOyvouuG+JvaTDh7wfVbteecgsiu7/Az6kR9l6GFuqfxRhuxreBUIQrCoae4ASVluZsLVxAytjIDIEwSe438lpa1IuPZNnDu7KuyGuOGWVT7ctS5PKcVhsThvHLmNB6ENnpA6qJw7mTEh5+Z5eZaCJBHbp5rb8Yriox9NwjUXNpBsfKyy+HwNVjmnwCAWyIJy6363XNlFQeEzt09RC2DdiWRniPFMTTeGuqSSJ8MQOov91Z8K4vXe8Aw4bz+RAVLX4BUc4kvJ7mJP1Wm4e5lNjWkHwgCbageazXOSeYk220qGIpNlsHP3gfX7rpjnTciPsoRxrdi72VXjuNBoI+JlP+N/uqnbcvZz9my94jWyMcQ6DBiTv0ULl/mSjUIo5jnHy5iCXRsDuVi8RxNhnOXv7TAVHiKzAQ5rS2DIM3B2g7LT085p5YzUHFxfPs9g43wWniWySWPA8L26jsR+IdvZZXEYXE0GFrnB7QT4mEZojXK4Ta9pVZwv+IDmAMrNL4/G2zj/AJNNie9lJ4jznhKrS0ve2Rux35BbZRjLdLcWm2cfi91/hDp8ffQcJearHAkWINjBkE2PqnanPtIGCx8Heyx3EcZR0ZUDxsMrgfWRoomHLC5oePDMuAMGNwDsljDHJulGuxZjz+Des59ouHyvae4/RNt5wY+zWvJOlje+ypa1fC5CyjQAcRdznFxHkoVMVGObUawgtiAWkixB9ks0t0nuV9qKR6MK9RzGn4bpPl9TsmX/ABBsPdWWDx/xKbTLZIBiRYx0TDnnNK5FnVWRe3+FP4KijjHMc41WkNAsdRPeFnsTx9znPLWE3JH5LR8Vpkg2OkLDcRYHPJawMH9IkxYdVs6W12RzI0U1RlyXFZ1d2UhhB6Wn/qdlGxNPE5oc1wi5IADRm0JI1HXoueBUC9+UghovHc9l6bwrBsyAFosI6e3Raoxbew910Kvilk8pocY2I8W2wPvoVOqYh4IlmUWkn5b75hYjyXpmJ5UwlQXosnWQMrp8wqLi3Jr2sc3DhkOILmloa9wH4Q8W23AOt1e62jF3qpy9FJhsPUc4NazNIkFpDgQLTIMQtJgOW6j7vLWDv4newsPdZHhFV+EqkVGVGkNy5SBYTIjaO62GG5rb4RlcAeouPSboi4r7iq3KeI7ml4VwxmHlzC4uIgknbWwGiu8E4kEnrZRuGtpvaHNdmnrb3arJaYpY2Mkm29zpCRKnFBIUqRAGD4/wWu7MWtLpJMiO6y7sLWEjLovV+J1crD1Nv1+iyxw4uTqTK5PXfF/Hk2ULUtynqURkafxbgH7qAzCkmYWjOFBTb8fh6ZDHOaHnQHVYYW2WPGEi/tRRT02VA1wyuJ/DHVVD+C4h4zPEH+5w+gWmr8fosJF7dBKzeI45Ve/M0NDBFpG5tnJ0sD0WlV2yQuIxIruXqh1LVHr8sVj8uU+ZI+kJunxXFl0te4DMAczWwC4mABF/S3utDwzjlZtEveWvMv8ADkDXDKYAMdbGVK6e9b5X6J1Q9GZPKGIP4mN8p/RR38mVwfmY71P5rUjm95B/+bGkjw7gefX6KtwnMWIZXJe8VKe3gAEnTLAERcem6sUepxyv0TqgUjuTaxvAHldH/GasxA//AES37hegf8nw8DO0tJIAsZMg3+hUvDYujWE03TbS2/mqbLeogsvDLYSivtMTwngFRoJcwF21x9FfYSi9r8rgWg2ki2yujTjQD2XDiVgfWPVmSFlVq8kivQZHyj2CKfD2u/CPso0nYpxmJe3oR5LQutol90cFLomuGLXwTBZwP3Cj/wAphv7Qe4TXEKz32mB0VcKRCn6ivPxDRYuS5/lsM2+dg9QE/SqsZ8tVv/YELJ1qDz07XXLMOWgy6NVZC/fYRxm+Tcs47TYPG9vmDP0VvhMYyo3Mx7XjsQY8+i8aqY2mSRnLo/tdHoYumRxU0zmYXg7OHh+q3V3WZ3RTKB7Nj8BTqtyvYHdOoPUHYryTmp78JiTRp1A4ANdOUOfBnwP9ttiE1/zvHtkCqI6upscR5GJnzlU2Jxb6rzUqPc97h4nGL2tYBaXGMt2ghqiz1L+GXFX16j/Bla1vihxMm0EiBHbXUr0xeU/wg4Y/PVxBkMy5B0c4kE/9Y3/qXqysrjpWBLHmWQQhKnKwQhCAKvjTCQDsCfsqGqYWrxEZTmiI3WJx77GO4XI/kljDN3SvKwUnHuOlksYYNhOsErLVXuqkue5rtQXGJHbaPPzTdWjU+K7OCQ2S5oN41nrluN0U8K7OGh8tqA5YvIAzEO7/AJgqyiqMIprz5LJSy8EptAtcSx4+Xwtc0ATAzQOlreajOqloJg5o8RbZpJOh1uZUfFV3sqw50lsAHrMQZG5n6J0YuXCna+sElp0vf7rS9hNiV/8AMCHaF0STJvBy2ExZ3tuuKWFq1gGNcbAnM4w3KXaZSbPMG2sKW0U6TWNyB7i75Qc1SGuNwXOgzM9YgJ/DuaMwDXePw+F0lvid4rSGjxfR3QIzsL5IGIbSY/JkmPmcHQIEAkjcbripgAx4qMYXTBtrP9UTfqo76rmvLGu0Op62IEk36nsFZUOLNYzI9hJ0zNi8gam2iMhhZIXEqDn3eWyQAY2NgXERYD8yolE/DygHO4AS8Ew022tax/d09XxQqvLWAtYRDQDtvfeCSe6fwXAjUlmdjb5iSYJEmG2EATPdT4B87E3hvM1RocHtNQSfFGWOxnbutJwzHMrszNBadCDsfMarNHhIh8FkNiGtaYcRNy4GPOZm8pMPiMmG8JaCDfLs4lweDOgHhjzKxXdFXbxsyyNrXJsQxIQspQ41UpgS4PAmew81c4DjdOrDfE1x6ix8jouPf0Fle+Mo0RmmSqjVFc1TnsUZ4hZY5WzLURKoAElZbjXEs7vhsIDYgna/dPc242YoN3ALr7E2BVLSwcQHO8JFr26GF3ei6VKKnLkzXWNvSiOx7W5pvfy9VIdRJbOaWwba6aKLjKYDog9Z100K5ozHzSBfWDtP0XUwZB/EDIAALkb2MJtmpYLfpqU494iZJcdzB9P99kmFyue3MS05hJm4E3hSkK3g91/hvgjSwLJMl5c73MD3ifVatVPK+X+Uw+QEN+EyJmYyjqrZWoofIIQhSQKkKVIUAeec/wDND6LxRpsaS0BxLjIvYANaZB3vHks7wzmdjwwVvC4yCY8JsIPbdTOeqTK2Ke5kSwNY4ibkXdPU3AnssdxXB5aZa0gFmZxIBn+0PMXgHTqSsXUUxt2ZuplpijZ8Q4ayo7PSeGuy5ZGjmk3Do181nsTy5iGPaWvD7ausG7W129VEw2ekWl5eHZfDBMdTbob+y1fCeMtq0yD4ntgHQG5jN5f7XOn36F8XlF+Iye5k8XwbEl12seZEvkA2tAlVHwn0nOzSHBxmADHSCNYXqrsMmHYbsPUKqH8lNPE4kumL4Z59WLC9rnZrNGVw1kA/MI7/AO1zw90MJe9waTLQJc4Xt4RaPNbrE8PY8Q9jD3iDbuq13LVIaZm+RP5q+P8AJVPZoh0P2ZwNzN+Z0F0lrsrXRMnzOUqx/mKVFgYxofmP4gHEnWDc2tsnK3K4M5ajtZvrbuFF/wCL1CXO+IAQfD36zHsr11tL8lbpkQGVXNezPlDLuzWkggA+EXbtc9FxiOKFmJGXwsuIbBER5wdJ6K7PLLiyPiAHWMsiZnrMKI/lN5nxsFoBAPXWNk662j/oh0yGncaAe1zYiZIYcua+86EjX1USpxIP/wDmCILs72jVz7gXOsZo9ArPDcrPYCfiAuPafIt7qFQ5frueXOaKY73Njq0bGymPU04ypIHXL0V9bGPMNMW1JEWnQjeB6rqrVecjGWytkycpO4MCO0bq04hy7UAJa4ONjBEGR3UShwetILsg8ySfomXUVSjlNEduWTScP5lawBlYnQQ7XbeNFbYnFsaw1C8ZImeo6DusI3g9V5N2CDAvr/cYXdXgNYNAzgx+G8eYWC3p+nlNNPBapTS4K/E43NUNVzfETv8ARI/FSZ/NJV4Y4OAqPa2dBYH6lTcPwuk3xPfPmV0XOEUijTKTKupirmbnf8lGqVMwgf7Kv3cJoOJIcI6ZrLtlTCsIaXNJ7DT1UfUL+qbGVT8soaXidAlxHS/splDDZ3taQb20Ij1V/QxGFp+IOYJ8vtCnYSvSqk5HNLh2hUz6uaTai8Dxoj7NVy1x99JzKbzmpkhsH8M2BHbsvSQvGWMvGi9fwbyWNJ1LQT6hN0F8p5UvBT1dcYNNEhCEq6RjBIUqEAeM81Y6rTxtemAGuc4ObLS4FrmtyuAbBnwx7rPUnve/4Dy7NUfmJHhnxCT2B/YXp/8AEXhTXsZXByvYctrFzTeJAm0Ej1XmdSg9uIdUaMwjKN8oJkESRHSeypkllmqDeEywqg0XjIczC4QQQ8hp1s64uDdUmKxDxUeR4Q4Ngx8wcRlDcpsLe/orluNFOoxjmS0dALkgkw03m+mlypGOxWHqZajWkPb8xmCcpOUZdI/VV/hosw3wP8q8wFzMlaYBhrz3uA763HqtxSYxwggei80w+JY2mHhpcwlzYFo1J8WxBJ9D6K/4Bx9lqRJAHyzYgbA9InVYL+n0vUlleUWxlnZmsfw1p0kJl3DOhlPsxBXYxHZZdFEvGB8yRXO4aeibOB7FW38x2TNXEnayqnTSllMlSkVNSmG2hR3BS8QdyVT8Q4kykCXOE9N/YLF25TliCLE0llklxG6psfx6iwlocHOGwuqypx/4jXAnIDMEGTHeRAlVHCsIx9SSCGXJmwIn39rrp0fxz5s/SKpXL+pY4rjdV7RlblzdLmPyVJVxFbMQ5z4JNtCOmn7uruq+nIa9uVzZggwScxMxtAAA1Sl7SfiVA18AZcxjNB/FA2ELpwphBYjEplKT5ZQcPzh0kvDgbGTc3t3UvF1qhJ8br2iYIJ0HnqPZLicVmfnkNcSJaIEHZoAt0TOJry4eAuIMOeHG5M6mIEEfRWOtN5wRqwsZK6tgHB/iv/kbro4KNoI6aQtFWxjHwXOB8OroDp1gxvt6KDWLXCW+Lro0dhO6dZYrwkVVPCkgxb1gEJaWD8rfmrIu8UkANsIBna5J9VyGHNDIG+aM1x0iIMXTJFcmQMTg4MaGL+9vVScDUyODgRLdQOmnonsVSDIzEEk+KdY1PuTMKHVwwLgWdzHsQfv7IlBNYYRk85R61yxw44kMeGn4c3cbaG4E6lelNFl5b/CnmHM84UucfC5wkW8JAJB2mdF6mEtFMa18VyJdZKUtzpCRKtBSCRKkKAMtzvScabHNOjiINwczSLjyn3WDx/By4Z6LTMAPZaCbEObOmhXpnM7JoE/0lp+sH7rJiiHnMDDo1H7usF8pRsyvRuoSlXhmAGFbnioXMyTJzS6dAAPwgdFKLqTHgsINgADIG4mBv1HktFxXhLKpJewh50ewweniGhVHW5dfZrahhumamPqREo7ykWKGDjE+IP8AAzXMQ0nLaG2G8ga9SoVSg2zhYuF9o7HvKku4diWNcMpe3+wE+pYLhVry8SHS0GJzNI3N7hMpZYNbGo5Y4yW5aNQuMzlcdBezSSZgyIWxa+V4/XcD1II6nUfdavlLizqbGU673EnQvmRJsMx1H2WHqem/vH9Dxl4ZtC9Q8ViI3TtZ26w/M3EHOd8JhOX8RGp7TsudCuVs9H7LeFklY/i5eSykcxIPi/RUdXg5jM94zjVovO4UCniSwthtiD2Hl26p8cRaTcXsdCd9ZB2+q7dNEaViJnlLU9znCsbJY5jTE3cDOw8J2OsnupOMY6MoLaYcLNaHEWmA1xkkX95VTXrue7MYEdbb9Cpj6roaQCCNHGSPJs6a7LUVbDLGZ8gIJ/qIBFr+LrJvYoxFdxi9hFoG2n0A9l1h6sBwgkdM0iY7DWPumazpAkR57dLboyGFg6aWl4JaDMT7XB+6kPw4JIZME3vLTqfe66wGKaxhZDH5jcuac2s2vrf2XbHtawtAP73n2UZDwVzaIzCBcGPXt20T+JpSBDfDeCNzG/Yfmuf5hodNtd4/eq5ditRmkdAfCPXZTnAuBsySBMgeg9F1h8S9pytaBrF9SYBJXL3zFybbn7IZUvYSU2RcYHMThcz8zn5t3R1sIHXZJiaDiWhgMuF4JOVsxBOklOMwL32DC3vEeyv8Fw8NibxFup79VXKaXA8Y55Nb/CjgraYfVLYdlDZ3EmSB7D3XparOA8PFCi1m8S49z+mis1fFNLcyzeWKhIlTCgkSoQBGxlHPTcw/iaR9F52wlpjcG/5r0xYnmbAllTOB4HXts7f31WPqoNpSXg1dLNKTi/JDZXBUik9p1CrAnWVIWBSwzdKOS1yt108lW4ng9J8yCZ1kn7LsYhcfGKs1oRQa4KzEcr0DHhEDRRhy61p8J07lXhryuHPm371RrQaWU7+F1QMrazw3pmn2lVbeXneIh51nv5la9zwmmGb9URcVwGH5MbiOX3u1h0aJtvAasWI8v/AFs3vbb80jagAjVP3fyRp/Bin8uVDHhG99vJNu4FXgjMLdluDiAEy+sAhW/kNP4MZR4PVZEnW8xF+hGibr8Hqk/N7iy2T8R7fu6Yq4gTcKe6/ZOj8GOdwWqTd0eQgJf/4j9C4+61L8QAmv5nyU91+yNC9Gddy8DrcqRR5eaOytXYpIcSUdxhoRDp8GY09fVS2YNjbwPZMurHRch5KjWydKJrqwAgBO8HOfEUwdM7SfcFVbirXgbg1+bdPXFykiuySjFs9jpVw7RPLL8MxRMLRYd8hdA5w+hIhACoQhAAmMRQa9pa4Ag7J9IoayGcGB4xwl9EktlzOupHYquZVXpj2AiCqLiHLjH3b4T1Cx2dInvF4NlfVY2kjIip3hdZh1UnGcv1mHww76FVlSlUZ8zHj0n7LJKiyPKNUbq5cMkEgpc3Ty+ygnFbG297fdDcQFU014LVjwyZP7/VcvNrT++ij/ABeqBVUBg6fdyNAf3omjU0G6T42vmpBoHuv319E04XnZdl4H5+ibc7qZ7faFKAafuP3rumKn+pTpf+9k28hSgGXdYXELtzhCbdUEeidCs4eFyVy6sBv+/wBFyHF3ytcfIH7qxQk+EI5pcsVzlwatlJpcKrP0bA91dYDlN5MuBKvhQ3yUTviuNzPUWOefCPVang3DCIstFw7lgN1C0WF4U1uy1RgorYxznKTyyBw/BkQr2gyAu2UgE4nEBCEIAEIQgAQhCABCEIA5LQUy/DNOoCkIQBWVuD0n6sHsq+typQd+Aey0aRQ0nySm1wZGryZTOkjyJUV/JfR7h9Vt0JXXB8oZWTXDMA/kx/8AWfYfomHcnVf657wvR4RCXsw9InvWe2eanlGt/WPZNnk+ufx/RemwiEdmHobv2ezzP/hlY/j+i6byPUOrz9F6VCIUqqC8Ih3TflnnTeQp+Zzj6lSafINPe/ut7CITKEV4Ec5PyZGhyXSb+EeysaHLVJv4Qr5CnApX0uF026NHspTaDRoAnkKQEASoQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAEQhCABCVCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgD/2Q==',
            price: 19.9,
            orderStatus: 'Entregado',
          },
          // {
          //   id: "1.3",
          //   name: "Ceviche Mixto",
          //   description: "una sabrosa combinación de pescado y mariscos marinados en jugo de limón, cebolla roja, ají limo y cilantro. Servido con choclo, camote y cancha tostada",
          //   imageDish: "https://cdn7.kiwilimon.com/recetaimagen/26255/23270.jpg",
          //   price: 38.5,
          //   orderStatus: "Entregado",
          // },
          // {
          //   id: '1.4',
          //   name: 'Causa Rellena',
          //   description:
          //     'una deliciosa entrada fría hecha de puré de papa amarilla, sazonada con limón, ají amarillo y aceite. Rellena de pollo, atún o langostinos, y acompañada de aguacate, huevo y aceitunas. Una opción deliciosa y colorida que deleitará su paladar.',
          //   imageDish:
          //     'https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Causa-Rellena-de-Pollo-1-1-300x203.jpg.webp',
          //   price: 28.2,
          //   orderStatus: 'Entregado',
          // },
          // {
          //   id: '1.5',
          //   name: 'Choritos a la chalaca',
          //   description:
          //     'mejillones frescos en su concha, acompañados de una mezcla picante de cebolla roja, tomate, cilantro y ají limo, todo sazonado con limón y sal. Una opción refrescante y deliciosa para comenzar su comida o compartir.',
          //   imageDish:
          //     'https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Choritos-a-la-Chalaca-1-1-300x170.jpg.webp',
          //   price: 27.0,
          //   orderStatus: 'Entregado',
          // },
        ],
        PlatoDeFondo: [
          {
            id: '1.3',
            name: 'Cajita Feliz',
            description: 'Plato bandera de la comida peruana',
            imageDish: 'https://portafolio.co/files/article_content/uploads/2019/08/17/5d582577f0d54.jpeg',
            price: 25.0,
            orderStatus: 'Entregado',
          },
          {
            id: '1.4',
            name: 'Papas Fritas',
            description: 'Arroz salteado con mariscos y un toque de cilantro',
            imageDish:
              'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar',
            price: 32.5,
            orderStatus: 'Entregado',
          },
          // {
          //   id: '4',
          //   name: 'Ceviche Mixto',
          //   description: 'Plato típico peruano a base de pescado y mariscos',
          //   imageDish: 'https://i.imgur.com/UCIOzJh.jpg',
          //   price: 27.0,
          //   orderStatus: 'Entregado',
          // },
          // {
          //   id: '5',
          //   name: 'Ají de Gallina',
          //   description: 'Pollo deshilachado en salsa de ají amarillo y leche',
          //   imageDish: 'https://i.imgur.com/pqCwv20.jpg',
          //   price: 20.0,
          //   orderStatus: 'Entregado',
          // },
        ],
        Bebidas: [
          {
            id: '1.5',
            name: 'Coca-Cola',
            description: 'Bebida gaseosa refrescante',
            imageDrink:
              'https://c8.alamy.com/compes/cwa2m5/mcdonalds-coca-cola-aislado-sobre-fondo-blanco-cwa2m5.jpg',
            price: 3.5,
            orderStatus: 'Entregado',
          },
          {
            id: '1.6',
            name: 'Sprite',
            description: 'Jugo natural de naranjas frescas',
            imageDrink:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uuq9UXdC9WCz_EaWEm3_xk3vSsJrB9BvYQ&usqp=CAU',
            price: 5.0,
            orderStatus: 'Entregado',
          },
        ],
      },
    },
    {
      id: '2',
      name: 'Papachos',
      description:
        'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
      image:
        'https://tofuu.getjusto.com/orioneat-prod-resized/bYNu7rJd9pGprdsYu-200-x.webp',
      distance: '500m',
      payment: ['online', 'cash', 'card'],
      tables: '5',
      menu: {
        Entradas: [
          {
            id: '2-1',
            name: 'Ceviche Mixto',
            description: 'Un plato de pescado marinado',
            imageDish: 'https://cdn7.kiwilimon.com/recetaimagen/26255/23270.jpg',
            price: 25.9,
            orderStatus: 'Entregado',
          },
          {
            id: '2',
            name: 'Leche de Tigre',
            description: 'Otro plato muy delicioso',
            imageDish:
              'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
            price: 19.9,
            orderStatus: 'Entregado',
          },
        ],
        PlatoDeFondo: [
          {
            id: '4',
            name: 'Ceviche Mixto',
            description: 'Plato típico peruano a base de pescado y mariscos',
            imageDish: 'https://i.imgur.com/UCIOzJh.jpg',
            price: 27.0,
            orderStatus: 'Entregado',
          },
          {
            id: '5',
            name: 'Ají de Gallina',
            description: 'Pollo deshilachado en salsa de ají amarillo y leche',
            imageDish: 'https://i.imgur.com/pqCwv20.jpg',
            price: 20.0,
            orderStatus: 'Entregado',
          },
        ],
        Bebidas: [
          {
            id: '3',
            name: 'Agua Mineral',
            description: 'Agua purificada sin gas',
            imageDrink:
              'https://www.naturaselection.com/pub/media/catalog/product/cache/2ee41b7f542b240f20e88c99180a138f/a/g/agua-mineral-natura-500-ml.png',
            price: 2.5,
            orderStatus: 'Entregado',
          },
          {
            id: '4',
            name: 'Cerveza',
            description: 'Cerveza artesanal hecha con ingredientes naturales',
            imageDrink:
              'https://cdn.pixabay.com/photo/2017/12/09/08/18/beer-3008177_960_720.jpg',
            price: 8.0,
            orderStatus: 'Entregado',
          },
        ],
      },
    },
    {
      id: '3',
      name: 'Central',
      description:
        'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hJXKvIa3jsD51UTiFhWhgCxpUWHbxe2atQ&usqp=CAU',
      distance: '500m',
      payment: ['online', 'cash', 'card'],
      tables: '5',
      menu: {
        Entradas: [
          {
            id: '1',
            name: 'Papa a la Huancaina',
            description: 'Un plato muy delicioso',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
            price: 13.9,
            orderStatus: 'Entregado',
          },
          {
            id: '2',
            name: 'Leche de Tigre',
            description: 'Otro plato muy delicioso',
            imageDish:
              'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
            price: 19.9,
            orderStatus: 'Entregado',
          },
        ],
        PlatoDeFondo: [
          {
            id: '4',
            name: 'Arroz con Pollo',
            description: 'Un plato tradicional de arroz con pollo',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2019/06/arroz-con-pollo-peruano.jpg',
            price: 15.9,
            orderStatus: 'Entregado',
          },
          {
            id: '3',
            name: 'Lomo Saltado',
            description: 'Un plato de carne saltada con cebolla y tomate',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2020/04/lomo-saltado.jpg',
            price: 21.9,
            orderStatus: 'Entregado',
          },
        ],
        Bebidas: [
          {
            id: '12',
            name: 'Chicha de Jora',
            description:
              'Otra bebida típica peruana hecha de maíz jora fermentado.',
            imageDrink:
              'https://i.pinimg.com/originals/19/2c/1b/192c1b9f7ea9df5262f8eb8e161dc0c1.jpg',
            price: 8.0,
            orderStatus: 'Entregado',
          },
          {
            id: '11',
            name: 'Pisco Sour',
            description:
              'Una bebida alcohólica peruana hecha de pisco, jugo de limón y clara de huevo.',
            imageDrink:
              'https://unareceta.com/wp-content/uploads/2020/09/receta-de-pisco-sour.jpg',
            price: 12.5,
            orderStatus: 'Entregado',
          },
        ],
      },
    },
  
    {
      id: '4',
      name: 'La 22',
      description:
        'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
      image:
        'https://restaurantela22.com/media/uploads/e896040c945411ea8f5cb67ac514398a.png',
      distance: '500m',
      payment: ['online', 'cash', 'card'],
      tables: '5',
      menu: {
        Entradas: [
          {
            id: '1',
            name: 'Papa a la Huancaina',
            description: 'Un plato muy delicioso',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
            price: 13.9,
            orderStatus: 'Entregado',
          },
          {
            id: '2',
            name: 'Leche de Tigre',
            description: 'Otro plato muy delicioso',
            imageDish:
              'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
            price: 19.9,
            orderStatus: 'Entregado',
          },
        ],
        PlatoDeFondo: [
          {
            id: '2',
            name: 'Ceviche Mixto',
            description: 'Un plato muy popular en la costa peruana',
            imageDish:
              'https://assets.unileversolutions.com/recipes-v2/234472.jpg',
            price: 18.5,
            orderStatus: 'Entregado',
          },
          {
            id: '3',
            name: 'Lomo Saltado',
            description: 'Un plato de carne saltada con cebolla y tomate',
            imageDish: 'https://i.blogs.es/5620ff/lomo-saltado-dap/840_560.jpg',
            price: 21.9,
            orderStatus: 'Entregado',
          },
        ],
        Bebidas: [
          {
            id: '9',
            name: 'Jugo de Maracuyá',
            description:
              'Un jugo refrescante y delicioso hecho de maracuyá fresco.',
            imageDrink:
              'https://www.comidasperuanas.vip/wp-content/uploads/2020/03/jugo-de-maracuya.jpg',
            price: 6.5,
            orderStatus: 'Entregado',
          },
          {
            id: '10',
            name: 'Chicha Morada',
            description: 'Una bebida típica peruana hecha de maíz morado.',
            imageDrink:
              'https://okdiario.com/img/2019/08/25/receta-de-chicha-morada-de-peru-1.jpg',
            price: 7.0,
            orderStatus: 'Entregado',
          },
        ],
      },
    },
    {
      id: '5',
      name: 'La 22',
      description:
        'PAPACHOS PROVOCA A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA.',
      image: 'http://admin.tantaperu.com/wp-content/uploads/2019/09/tanta-fb.png',
      distance: '500m',
      payment: ['online', 'cash', 'card'],
      tables: '5',
      menu: {
        Entradas: [
          {
            id: '1',
            name: 'Papa a la Huancaina',
            description: 'Un plato muy delicioso',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2020/04/papa-a-la-huacaina.jpg',
            price: 13.9,
            orderStatus: 'Entregado',
          },
          {
            id: '2',
            name: 'Leche de Tigre',
            description: 'Otro plato muy delicioso',
            imageDish:
              'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Leche-de-tigre.jpg',
            price: 19.9,
            orderStatus: 'Entregado',
          },
        ],
        PlatoDeFondo: [
          {
            id: '4',
            name: 'Arroz con Pollo',
            description: 'Un plato tradicional de arroz con pollo',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2019/06/arroz-con-pollo-peruano.jpg',
            price: 15.9,
            orderStatus: 'Entregado',
          },
          {
            id: '5',
            name: 'Ají de Gallina',
            description: 'Un plato con pollo deshilachado y una salsa de ají',
            imageDish:
              'https://unacomidaperuana.com/wp-content/uploads/2019/07/aji-de-gallina.jpg',
            price: 16.9,
            orderStatus: 'Entregado',
          },
        ],
        Bebidas: [
          {
            id: '11',
            name: 'Pisco Sour',
            description:
              'Una bebida alcohólica peruana hecha de pisco, jugo de limón y clara de huevo.',
            imageDrink:
              'https://unareceta.com/wp-content/uploads/2020/09/receta-de-pisco-sour.jpg',
            price: 12.5,
            orderStatus: 'Entregado',
          },
          {
            id: '12',
            name: 'Chicha de Jora',
            description:
              'Otra bebida típica peruana hecha de maíz jora fermentado.',
            imageDrink:
              'https://i.pinimg.com/originals/19/2c/1b/192c1b9f7ea9df5262f8eb8e161dc0c1.jpg',
            price: 8.0,
            orderStatus: 'Entregado',
          },
        ],
      },
    },
  ]