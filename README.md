Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

## ToDo's

- [x] Initialize new react app.
- [ ] Create two input-fields with changing states
  - [ ] Create an input field for the top text box
    - [ ] This text box should have an associated label with the text "Top text." (???)
    - [x] Create a state for the component
    - [x] Display the current state
    - [x] Connect the onChange event to update the state
  - [ ] Create an input field for the bottom text box
    - [ ] This text box should have an associated label with the text "Bottom text." (???)
    - [x] Create a state for the component
    - [x] Display the current state
    - [x] Connect the onChange event to update the state
  - [ ] Both text boxes should be empty when the page first loads
- [ ] Figure out how to display the text in the meme-template (maybe with props.?)
- [ ] Figure out a way to show the meme-templates from https://memegen.link/#templates in the app
  - [ ] Figure out how to show a single template first
- [ ] Create a third input-field for the user to generate a meme based on the user's input
  - [ ] Create an initial state for the page
    - [ ] When the page first loads , an image should be played by default as an initial state
    - [ ] The displayed image element should include the attribute 'data-test-id="meme-image"'
  - [ ] Connect the onChange event to update the state according to the users input
- [ ] Create a button element which contains the text 'Download'
- [ ] When clicking the 'download'-button the user should be able to download the meme
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

It should allow the user to:

- [ ] Enter text for the top and bottom of the meme
  - [ ] The top text box needs to have a label element associated with it containing the text `Top text`
  - [ ] The bottom text box needs to have a label element associated with it with the text `Bottom text`
  - [ ] Both text boxes should be empty when the page first loads
- [ ] Preview the generated meme
  - [ ] The image element needs to have an html attribute set as follows: `data-test-id="meme-image"`
    - [ ] This image element should show a working image when the page first loads
- [ ] Change the meme template (the background image)
  - [ ] The meme template selector element needs to have a label element associated with it containing the text `Meme template`
  - [ ] If the user follows the steps below, the `doge` meme template needs to be selected:
    1. Click on the label of the meme template selector
    2. Clear any existing value (eg. with a text box)
    3. Type the text `doge`
    4. Hit enter
- [ ] Download the meme by clicking on a button
  - [ ] The button element needs to contain the text `Download`
