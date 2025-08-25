const { Builder, By, until } = require('selenium-webdriver');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


async function script2() {
    // 1) Instancier le driver (Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Ouvrir le lien de la page
        await driver.get('https://www.saucedemo.com/');
        await sleep(1000);

        //Déclaration des variables d'authentifications
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Trouver les champs de saisie
        const champIdentifiant = await driver.wait(until.elementLocated(By.id('user-name')), 10000);
        await driver.wait(until.elementIsVisible(champIdentifiant), 2000);

        const champPassword = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await driver.wait(until.elementIsVisible(champPassword), 2000);

        // Saisir le username dans le champ1
        await champIdentifiant.sendKeys(username);
        await sleep(1000);

        // Saisir le password dans le champ2
        await champPassword.sendKeys(password);
        await sleep(1000);

        // Trouver le bouton et click
        const boutonLogin = await driver.findElement(By.id("login-button"));
        await driver.wait(until.elementIsVisible(boutonLogin), 5000);
        await boutonLogin.click();
        await sleep(1000);



        //Sur la page articles
        // Trouver le bouton de l'article 1 et appuyer add
        const boutonArt1 = await driver.findElement(By.id("add-to-cart-sauce-labs-backpack"));
        await driver.wait(until.elementIsVisible(boutonArt1), 5000);
        await boutonArt1.click();
        await sleep(1000);

        // Trouver le bouton de l'article 2 et appuyer add
        const boutonArt2 = await driver.findElement(By.css('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)'));
        await driver.wait(until.elementIsVisible(boutonArt2), 5000);
        await boutonArt2.click();
        await sleep(1000);

        //Trouver le bouton panier click
        const boutonPanier = await driver.findElement(By.css("a.shopping_cart_link"));
        await driver.wait(until.elementIsVisible(boutonPanier), 5000);
        await boutonPanier.click();
        await sleep(1000);


        //Sur la page panier
        // Trouver le bouton checkout et appuyer dessus
        const boutonCheckout = await driver.findElement(By.id("checkout"));
        await driver.wait(until.elementIsVisible(boutonCheckout), 5000);
        await boutonCheckout.click();
        await sleep(1000);

        //Sur la page Checkout
        //Déclaration des variables de saisie
        const firstname = 'Test';
        const lastname = 'User';
        const zip = '75001';

        // Trouver les champs à saisir
        const champFn = await driver.findElement(By.id("first-name"));
        const champLn = await driver.findElement(By.id("last-name"));
        const champZi = await driver.findElement(By.id("postal-code"));
        await driver.wait(until.elementIsVisible(champFn), 5000);
        await driver.wait(until.elementIsVisible(champLn), 5000);
        await driver.wait(until.elementIsVisible(champZi), 5000);

        // Saisir les infos dans les champs
        await champFn.sendKeys(firstname);
        await sleep(1000);
        await champLn.sendKeys(lastname);
        await sleep(1000);
        await champZi.sendKeys(zip);
        await sleep(1000);


        // Trouver le bouton continue et appuyer
        const boutonContinue = await driver.findElement(By.id("continue"));
        await driver.wait(until.elementIsVisible(boutonContinue), 5000);
        await boutonContinue.click();
        await sleep(1000);

        // Trouver le bouton finish et appuyer
        const boutonFinish = await driver.findElement(By.id("finish"));
        await driver.wait(until.elementIsVisible(boutonFinish), 5000);
        await boutonFinish.click();
        await sleep(1000);


        //Trouver message "h2" et vérifier si c'est bon
        const messageOk = await driver.findElement(By.css('h2'));
        const messageOkTexte = await messageOk.getText();
        await driver.wait(until.elementIsVisible(messageOk), 5000);

        if (messageOkTexte === "Thank you for your order!") {
            console.log("Order ok");
        } else {
            throw new Error("Le message de confirmation n'a pas été trouvé !");
        }
        
    }


    catch (e) {
        console.error('Erreur rencontrée :', e.message);
    }

    finally {
        // Fermer le navigateur
        await driver.quit();
    }
};


// Appel de la fonction
script2();
