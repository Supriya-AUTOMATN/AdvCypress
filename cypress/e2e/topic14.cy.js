/*
Viewport simulation i.e. responsiveness of webpage testing
i.e. checking the visibility / invisibility of elements based on browser width and height

*/
describe('Topic01_Suite', () => {
    it('Topic01_Testcase', () => {

        cy.visit('https://www.bing.com')
        cy.get("#sb_form_q").type("cypress", { delay: 500 })
        cy.get("div>#sa_ul>li").should("have.length", 10).as("dynamiclist")
        cy.get("@dynamiclist").each(($item, $index, $allItems) => {
            cy.log(($index + 1) + " = " + $item.text())
            //cy.log($allItems.text())
        })
        //reading the top most element 
        cy.get("@dynamiclist").first().then(item => {
            cy.log("First item =" + item.text())
        })
        //reading the last element 
        cy.get("@dynamiclist").last().then(item => {
            cy.log("Last item =" + item.text())
        })
        //reading the i th element 
        cy.get("@dynamiclist").eq(4).then(item => {
            cy.log("i th item =" + item.text())
        })
        //******** Reading 'i+1'th element inside them */
        cy.get("@dynamiclist").eq(4).then(item => {
            cy.wrap(item).next().then(nextItem => {
                cy.log("5th+1 Item = " + nextItem.text())
            })
        })

        //******** Reading 'i-1'th element inside them */
        cy.get("@dynamiclist").eq(4).then(item => {
            cy.wrap(item).prev().then(prevItem => {
                cy.log("5th-1 Item = " + prevItem.text())
            })
        })
        //******** Reading parent of ith element inside them */
        cy.get("@dynamiclist").eq(4).then(item => {
            cy.wrap(item).parent().then(parent => {
                cy.log("parent of 5th Item = " + parent.text())
            })
        })
        //****************** Reading the all LI items in the page using second get */    
        cy.get("@dynamiclist").get("li").then(allItems => {
            cy.log("All Li Tags with get method = " + allItems.length)
        })

        //****************** Reading the all LI items within UL using find */    
        cy.get("@dynamiclist").find("li").then(allItems => {
            cy.log("All Li Tags  with find method = " + allItems.length)
        })

        //****************** Reading the all LI items within UL using children */    
        cy.get("div>#sa_ul").children("li").then(allItems => {
            cy.log("All Li Tags with children method  = " + allItems.length)
        })
    })
})