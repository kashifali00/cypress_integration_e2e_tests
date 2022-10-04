export class PPCM_HomePage{
    get accounts_transaction() {
        cy.get("button[class='mat-focus-indicator mat-button mat-button-base active-nav'] span[class='nav-text']")
    }

    get lookup_account_number() {
        cy.get("#mat-input-0")
    }

    get lookup_card() {
        cy.get("#mat-input-1")
    }


}