class Product {
    /* Construct Product */
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UserInterface {
    addProduct(product) {
        /* Selected Element with Id Product-list */
        const productList = document.getElementById('product-list')
        /* Create a Element div */
        const element = document.createElement('div')
        /* Content of the Element */
        element.innerHTML = `
            <div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>Product Name: </strong>${product.name}
                    <strong>Product Price: </strong>${product.price}
                    <strong>Product Year: </strong>${product.year}
                    <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                </div>
            </div>
        `
        /* Added element in Product List  */
        productList.appendChild(element)

        /* Show Message */
        this.showMessage("Added Product", "success")

        /* Reset Form */
        this.resetForm()
    }

    resetForm() {
        document.getElementById('form-products').reset()
    }

    deleteProduct(element) {
        /* If Element have Propierty Name === delete */
        if (element.name === 'delete') {
            /* Delete Element Father (Navigate) */
            element.parentElement.parentElement.parentElement.remove()
            /* Show Message */
            this.showMessage("Delete Product", "danger")
        }
    }

    /* Messages of the Application */
    showMessage(message, cssClass) {
        /* New Element */
        const divAlert = document.createElement('div')

        /* Added Class of the CSS */
        divAlert.className = 'alert mt-3 alert-' + cssClass

        /* Added new child with the message */
        divAlert.appendChild(document.createTextNode(message))

        /* Show in DOM */

        // Select Element Message
        const divMessage = document.getElementById('message') 

        divMessage.appendChild(divAlert)

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
}

// DOM Events 

/* Submit Form */
document.getElementById('form-products').addEventListener('submit', (e) => {
    e.preventDefault()

    /* Data for Form */
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    /* New Object of Type Product */
    const product = new Product(name, price, year)

    /* Add Product (Class UserInterface) */
    const UI = new UserInterface()

    if (name === '' || price === '' || year === ''){
        return UI.showMessage('Complete Fields Please', 'info')
    }

    /* Method AddProduct */
    UI.addProduct(product)
})

/* Click Delete (Detected Click For User In The Container of The Product List *ANY* )*/
document.getElementById('product-list').addEventListener('click', function (e) {
    const UI = new UserInterface()
    /* Get if clicked Button Deleted */
    UI.deleteProduct(e.target)  
})