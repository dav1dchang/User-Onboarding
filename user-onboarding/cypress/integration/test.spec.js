describe('User Onboarding App', () => {

    // Get the Name input and type a name in it.
    // Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    // Get the Email input and type an email address in it
    // Get the password input and type a password in it
    // Set up a test that will check to see if a user can check the terms of service box
    // Check to see if a user can submit the form data
    // Check for form validation if an input is left empty
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const checkbox = () => cy.get('input[name="tos"]')
    const submitForm = () => cy.get('button[id="submit"]')
    // const nameTest = () => cy.get('[id="nameTest"]')
    // const emailTest = () => cy.get('[id="emailTest"]')
    // const passwordTest = () => cy.get('[id="passwordTest"]')

    describe('Filling out inputs & then testing', () => {
        it('can type inside the name input', () => {
            nameInput()
            .should('have.value', '')
            .type('Jose Canseco')
            .should('have.value', 'Jose Canseco')
        })

        it('can type inside the email input', () => {
            emailInput()
            .should('have.value', '')
            .type('josecanseco@steroids.com')
            .should('have.value', 'josecanseco@steroids.com')
        })

        it('can type inside the password input', () => {
            passwordInput()
            .should('have.value', '')
            .type('testpassword')
            .should('have.value', 'testpassword')
        })
    })//describe testing inputs

    describe('Clicking the terms of service checkbox & then testing', () => {
        it('can click the checkbox', () => {
            checkbox()
            .click()
            .should('be.checked')
        })
    })//desribe clicking TOS checkbox

    describe('Submitting a form & validation if an input is left empty', () => {
        it('can submit a form', () => {
            nameInput().type('Alex Rodriguez')
            emailInput().type('alexrodriguez@steroids.com')
            passwordInput().type('biogenesis')
            submitForm().click()
            cy.contains(/Alex Rodriguez/).should('exist')
            cy.contains(/alexrodriguez@steroids.com/).should('exist')
            cy.contains(/biogenesis/).should('exist')
        })

        it('can validate whether an input was left empty', () => {

        })
        
    })//describe submitting a form & validation








})//describe User Onboarding App