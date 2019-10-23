function EditorOptions()
{

}

EditorOptions.prototype.getTemplates = function()
{
     const options = {
         templates:
         [
              {
                    text: 'Graphic',
                    title: 'Add Graphic',
                    className: 'jsoneditor-type-object',
                    field: 'GraphicTemplate',
                    value: {
                      "_id": "1-0-1-10-10",
                      "_parentId": "1-0-1-10-00",
                      "_type": "component",
                      "_component": "graphic",
                      "_classes": "",
                      "_layout": "full",
                      "title": "",
                      "displayTitle": "",
                      "body": "",
                      "instruction": "",
                      "_graphic": {
                          "large": "course/en/images/single_width.jpg",
                          "small": "course/en/images/single_width.jpg",
                          "alt": "Placeholder graphic.",
                          "attribution": ""
                      }
                    }
               },
               {
                    text: 'Hotgraphic',
                    title: 'Add Hotgraphic',
                    className: 'jsoneditor-type-object',
                    field: 'HotgraphicTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "hotgraphic",
                         "_classes": "",
                         "_layout": "full",
                         "_comment": "setCompletionOn = inview | allItems",
                         "_setCompletionOn": "allItems",
                         "_canCycleThroughPagination": false,
                         "_hidePagination": false,
                         "_useGraphicsAsPins": false,
                         "title": "Hot Graphic",
                         "displayTitle": "Hot Graphic",
                         "body": "You can add interactivity to an image by using the <strong>hot graphic</strong>. This component allows you to position icons over an image. When an icon is selected, content associated with its corresponding location is displayed in a window over the image. This component will fall back to a <strong>narrative</strong> when viewed on mobile.<br><br>This component is always spanned.",
                         "instruction": "Select the icons to find out more.",
                         "mobileInstruction": "",
                         "_graphic": {
                            "src": "course/en/images/hotspot-graphic.jpg",
                            "alt": "Placeholder graphic."
                         },
                         "_items": [
                            {
                                "title": "Hot graphic item 1",
                                "body": "This is display text 1 which we have associated with the tablet image on the desktop.",
                                "_graphic": {
                                   "src": "course/en/images/hotspot-1@2x.jpg",
                                   "alt": "Placeholder graphic.",
                                   "_classes": ""
                                },
                                "strapline": "Hot graphic item 1",
                                "_classes": "",
                                "_top": 4,
                                "_left": 20
                            },
                            {
                                "title": "Hot graphic item 2",
                                "body": "This is display text 2 which we have linked to the smartphone image.",
                                "_graphic": {
                                   "src": "course/en/images/hotspot-1@2x.jpg",
                                   "alt": "Placeholder graphic.",
                                   "_classes": ""
                                },
                                "strapline": "Hot graphic item 2",
                                "_classes": "",
                                "_top": 62,
                                "_left": 27
                            },
                            {
                                "title": "Hot graphic item 3",
                                "body": "This is display text 3 which we’ve located over the laptop so you would expect the content to be about PCs.",
                                "_graphic": {
                                   "src": "course/en/images/hotspot-1@2x.jpg",
                                   "alt": "Placeholder graphic.",
                                   "_classes": ""
                                },
                                "strapline": "Hot graphic item 3",
                                "_classes": "",
                                "_top": 24,
                                "_left": 60
                            }
                         ],
                         "_pageLevelProgress": {
                            "_isEnabled": true,
                            "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Accordion',
                    title: 'Add Accordion',
                    className: 'jsoneditor-type-object',
                    field: 'AccordionTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "accordion",
                         "_classes": "",
                         "_layout": "full",
                         "title": "Accordion",
                         "displayTitle": "Accordion",
                         "body": "You can use the <strong>accordion</strong> component to present learners with a series of headings which, once selected, expand to reveal associated text. Select each of the headings below to find out more about how accordions can be used.<br><br>These components can be either single or spanned. If spanned they can also contain a graphic.",
                         "instruction": "Select the headings to find out more.",
                         "_items": [
                            {
                                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                "body": "This is display text 1 and we’re using it to discuss lists.<br><br>If you need to present a list that can stand alone as a piece of content, but which can also be explored in more detail, accordions are a great choice.",
                                "_graphic": {
                                    "src": "course/en/images/accordion_full_width.jpg",
                                    "alt": "Placeholder graphic."
                                }
                            },
                            {
                                "title": "Steps in a process",
                                "body": "This is display text 2 and now we’re discussing how accordions can be great at presenting a process.<br><br>The headings can be used to present the high-level stages in the process, which once selected, provide a more extensive explanation of what happens at that specific point.",
                                "_graphic": {
                                    "src": "course/en/images/accordion_full_width.jpg",
                                    "alt": "Placeholder graphic."
                                }
                            },
                            {
                                "title": "Recaps",
                                "body": "This is display text 3 and we’re now talking about using accordions to provide the learner with a summary.<br><br>Each accordion item corresponds to a key piece of learning presented on the page. When this item is selected a short summary of the learning point is provided.",
                                "_graphic": {
                                    "src": "course/en/images/accordion_full_width.jpg",
                                    "alt": "Placeholder graphic."
                                }
                            }
                         ],
                         "_pageLevelProgress": {
                            "_isEnabled": true,
                            "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Slider',
                    title: 'Add Slider',
                    className: 'jsoneditor-type-object',
                    field: 'SliderTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "slider",
                         "_classes": "",
                         "_layout": "full",
                         "_attempts": 1,
                         "_questionWeight": 1,
                         "_canShowModelAnswer": true,
                         "_shouldDisplayAttempts": false,
                         "_showNumber": true,
                         "_showScaleIndicator": true,
                         "_scaleStart": 1,
                         "_scaleEnd": 10,
                         "title": "Slider",
                         "displayTitle": "Slider",
                         "body": "Working memory is thought to be responsible for our ability to temporarily hold and manipulate information, but according to a paper by Miller (1956) what ‘magic number’ describes its capacity?",
                         "instruction": "Drag the slider to make your choice and select Submit.",
                         "labelStart": "",
                         "labelEnd": "",
                         "_correctAnswer": "",
                         "_correctRange": {
                             "_bottom": 5,
                             "_top": 9
                         },
                         "_feedback": {
                             "title": "Feedback",
                             "correct": "Correct answer feedback.<br><br>Yes, that’s right. According to Miller’s paper 7 +/- 2 chunks of information was the limited capacity of working memory. Various theories from the field of cognitive psychology such as Miller’s <a href='http://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two' target='_blank'>magical number</a>, <a href='http://en.wikipedia.org/wiki/Chunking_%28psychology%29#Chunking_as_the_learning_of_long-term_memory_structures' target='_blank'>chunking</a>, <a href='http://en.wikipedia.org/wiki/Forgetting_curve' target='_blank'>the forgetting curve</a> and <a href='http://en.wikipedia.org/wiki/Spaced_repetition' target='_blank'>spaced repetition</a> have all influenced learning theory over the last 50 years or so.<br><br><em>Component facts: The correct answer for a slider component can be an exact number or a range. In this instance we have set the correct answer to a range of 5-9 due to the correct answer being seven plus or minus two. Component is either single or spanned.</em>",
                             "_incorrect": {
                                 "final": "Incorrect answer feedback.<br><br>Sorry, that’s not right. According to Miller’s paper 7 +/- 2 chunks of information was the limited capacity of working memory. Various theories from the field of cognitive psychology such as Miller’s <a href='http://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two' target='_blank'>magical number</a>, <a href='http://en.wikipedia.org/wiki/Chunking_%28psychology%29#Chunking_as_the_learning_of_long-term_memory_structures' target='_blank'>chunking</a>, <a href='http://en.wikipedia.org/wiki/Forgetting_curve' target='_blank'>the forgetting curve</a> and <a href='http://en.wikipedia.org/wiki/Spaced_repetition' target='_blank'>spaced repetition</a> have all influenced learning theory over the last 50 years or so.<br><br><em>Component facts: The correct answer for a slider component can be an exact number or a range. In this instance we have set the correct answer to a range of 5-9 due to the correct answer being seven plus or minus two. Component is either single or spanned.</em>"
                             }
                         },
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": true
                         }
                    }
               },
               {
                    text: 'Narrative',
                    title: 'Add Narrative',
                    className: 'jsoneditor-type-object',
                    field: 'NarrativeTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "narrative",
                         "_classes": "",
                         "_layout": "full",
                         "_comment": "setCompletionOn = inview | allItems",
                         "_setCompletionOn": "allItems",
                         "_hasNavigationInTextArea": false,
                         "title": "Narrative",
                         "displayTitle": "Narrative",
                         "body": "The narrative component lets you scroll through a series of images each with some accompanying text.<br><br>This component is always spanned.",
                         "instruction": "Select the next and back arrows to find out more.",
                         "mobileInstruction": "Select the next and back arrows followed by the plus icon to find out more.",
                         "_items": [
                             {
                                 "title": "Narrative item 1",
                                 "body": "Narratives are particularly good for showing dialogue between two or more characters, with each step of the conversation being accompanied by an image. This photo story approach can be used to provide context for the learning to follow, to illustrate real-world application of the learning or to show the impact on people when the learning hasn’t been applied correctly. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/slider-1.jpg",
                                     "alt": "Placeholder graphic."
                                 },
                                 "strapline": "Narrative item 1"
                             },
                             {
                                 "title": "Narrative item 2",
                                 "body": "Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/slider-2.jpg",
                                     "alt": "Placeholder graphic."
                                 },
                                 "strapline": "Narrative item 2"
                             },
                             {
                                 "title": "Narrative item 3",
                                 "body": "The narrative can also be used when you want to illustrate the constituent steps that make up a larger process.",
                                 "_graphic": {
                                     "src": "course/en/images/slider-3.jpg",
                                     "alt": "Placeholder graphic."
                                 },
                                 "strapline": "Narrative item 3"
                             }
                         ],
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Slider Narrative',
                    title: 'Add Slider Narrative',
                    className: 'jsoneditor-type-object',
                    field: 'SliderNarrativeTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "sr-slider",
                         "_classes": "",
                         "_layout": "full",
                         "title": "Slider Narrative",
                         "displayTitle": "Slider Narrative",
                         "body": "The narrative component lets you scroll through a series of images each with some accompanying text.<br><br>This component is always spanned.",
                         "instruction": "Select the next and back arrows to find out more.",
                         "mobileInstruction": "Select the next and back arrows followed by the plus icon to find out more.",
                         "comment": "_setCompletionOn: inview || allItems",
                         "_setCompletionOn": "allItems",
                         "_items": [
                             {
                                 "title": "Narrative item 1",
                                 "body": "Narratives are particularly good for showing dialogue between two or more characters, with each step of the conversation being accompanied by an image. This photo story approach can be used to provide context for the learning to follow, to illustrate real-world application of the learning or to show the impact on people when the learning hasn’t been applied correctly. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-4-1-60-10_01.jpg",
                                     "alt": "Slide 1 Image"
                                 }
                             },
                             {
                                 "title": "Narrative item 2",
                                 "body": "Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-4-1-60-10_02.jpg",
                                     "alt": "Slide 2 Image",
                                     "attribution": ""
                                 }
                             },
                             {
                                 "title": "Narrative item 3",
                                 "body": "The narrative can also be used when you want to illustrate the constituent steps that make up a larger process.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-4-1-60-10_03.jpg",
                                     "alt": "Slide 3 Image"
                                 }
                             }
                         ],
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Slider Carousel',
                    title: 'Add Carousel Narrative',
                    className: 'jsoneditor-type-object',
                    field: 'CarouselTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "sr-slider",
                         "_classes": "carousel",
                         "_layout": "full",
                         "title": "Slider Carousel",
                         "displayTitle": "Slider Carousel",
                         "body": "The narrative component lets you scroll through a series of images each with some accompanying text.<br><br>This component is always spanned.",
                         "instruction": "Select the next and back arrows to find out more.",
                         "mobileInstruction": "Select the next and back arrows followed by the plus icon to find out more.",
                         "comment": "_setCompletionOn: inview || allItems",
                         "_setCompletionOn": "allItems",
                         "_items": [
                             {
                                 "title": "Carousel item 1",
                                 "body": "Narratives are particularly good for showing dialogue between two or more characters, with each step of the conversation being accompanied by an image. This photo story approach can be used to provide context for the learning to follow, to illustrate real-world application of the learning or to show the impact on people when the learning hasn’t been applied correctly. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-2-1-50-10_01.jpg",
                                     "alt": "Slide 1 Image"
                                 }
                             },
                             {
                                 "title": "Carousel item 2",
                                 "body": "Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome. Narratives can also be used to present case studies, where the different displays are used to set the scene, show the key events and then the outcome.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-2-1-50-10_02.jpg",
                                     "alt": "Slide 2 Image",
                                     "attribution": ""
                                 }
                             },
                             {
                                 "title": "Carousel item 3",
                                 "body": "The narrative can also be used when you want to illustrate the constituent steps that make up a larger process.",
                                 "_graphic": {
                                     "src": "course/en/images/narrative/1-2-1-50-10_03.jpg",
                                     "alt": "Slide 3 Image"
                                 }
                             }
                         ],
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Flip Cards',
                    title: 'Add Flip Cards',
                    className: 'jsoneditor-type-object',
                    field: 'FlipCardsTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "card",
                         "_classes": "",
                         "_layout": "full",
                         "title": "Flip Cards Component",
                         "displayTitle": "Flip Cards Component",
                         "body": "Flip cards are a way to present an image and a topic, then explain it. You can include an intro at the top, and/or instructions such as “Click a card below to learn more.” It will create as many rows as it needs to show all the flipcards.",
                         "instruction": "",
                         "_flipType": "allFlip",
                         "_flipTime": 400,
                         "_columns": 2,
                         "_items": [
                             {
                                 "frontImage": {
                                     "src": "course/en/images/cards/flipcard_icon_1.svg",
                                     "alt": "flipcard item 1 graphic alt text here."
                                 },
                                 "frontTitle": "Flip Cards Arrange Nicely",
                                 "backTitle": "Flip Cards Arrange Nicely",
                                 "backBody": "<p>Try to <span data-tip='limit'>limit</span> a block of text so it takes up no more space than the image on the back side.  It is unwise to customize the component to include scrolling, since this doesn’t work well on mobile devices.</p> <p>Recommendations: 70 or less characters in title, 350 characters or less in text.</p>"
                             },
                             {
                                 "frontImage": {
                                     "src": "course/en/images/cards/flipcard_icon_2.svg",
                                     "alt": "flipcard item 1 graphic alt text here."
                                 },
                                 "frontTitle": "Flip Cards Arrange Nicely",
                                 "backTitle": "Flip Cards Arrange Nicely",
                                 "backBody": "<p>Try to limit a block of text so it takes up no more space than the image on the back side.  It is unwise to customize the component to include scrolling, since this doesn’t work well on mobile devices.</p> <p>Recommendations: 70 or less characters in title, 350 characters or less in text.</p>"
                             }
                         ],
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'MCQ',
                    title: 'Add MCQ',
                    className: 'jsoneditor-type-object',
                    field: 'MCQTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "mcq",
                         "_classes": "",
                         "_layout": "full",
                         "_attempts": 1,
                         "_questionWeight": 1,
                         "_canShowModelAnswer": true,
                         "_shouldDisplayAttempts": false,
                         "_isRandom": true,
                         "_selectable": 1,
                         "title": "Multiple Choice Question",
                         "displayTitle": "Multiple Choice Question",
                         "body": "In what year was the first recorded instance of a large scale assessment that consists solely of multiple choice questions?",
                         "instruction": "Choose one or more options and select Submit.",
                         "_items": [
                             {
                                 "text": "1917",
                                 "_shouldBeSelected": true
                             },
                             {
                                 "text": "1888",
                                 "_shouldBeSelected": false
                             },
                             {
                                 "text": "1953",
                                 "_shouldBeSelected": false
                             },
                             {
                                 "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                 "_shouldBeSelected": false
                             }
                         ],
                         "_feedback": {
                             "title": "Feedback",
                             "correct": "Correct feedback text.<br><br>That’s correct. The first large assessment to consist solely of the multiple choice question type was the Army Alpha test, used from <strong>1917</strong> to evaluate U.S. military recruits in the First World War.<br><br>Source: <a href='http://en.wikipedia.org/wiki/Multiple_choice' target='_blank'>Wikipedia</a><br><br><em>Component facts: <strong>Multiple Choice Questions (or MCQs)</strong> are a tried and tested method for presenting learners with a simple text-based question. Component is either single or spanned.</em>",
                             "_incorrect": {
                                 "final": "Incorrect feedback text.<br><br>That’s not right. The first large assessment to consist solely of the multiple choice question type was the Army Alpha test, used from <strong>1917</strong> to evaluate U.S. military recruits in the First World War.<br><br>Source: <a href='http://en.wikipedia.org/wiki/Multiple_choice' target='_blank'>Wikipedia</a><br><br><em>Component facts: <strong>Multiple Choice Questions (or MCQs)</strong> are a tried and tested method for presenting learners with a simple text-based question. Component is either single or spanned.</em>"
                             }
                         },
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'GMCQ',
                    title: 'Add GMCQ',
                    className: 'jsoneditor-type-object',
                    field: 'GMCQTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "gmcq",
                         "_classes": "",
                         "_layout": "full",
                         "_attempts": 1,
                         "_questionWeight": 1,
                         "_canShowModelAnswer": true,
                         "_shouldDisplayAttempts": false,
                         "_isRandom": true,
                         "_selectable": 3,
                         "title": "Graphical Multiple Choice Question",
                         "displayTitle": "Graphical Multiple Choice Question",
                         "body": "The graphical multiple choice question is an alternative to the standard MCQ, and allows you to ask a question and present the options as graphics (with accompanying captions). This component is always spanned.",
                         "instruction": "Choose option 2 and select Submit.",
                         "_columns": 3,
                         "_items": [
                             {
                                 "text": "Option 1",
                                 "_shouldBeSelected": false,
                                 "_graphic": {
                                     "large": "course/en/images/single_width.jpg",
                                     "small": "course/en/images/single_width.jpg",
                                     "alt": "Placeholder graphic."
                                 }
                             },
                             {
                                 "text": "Option 2",
                                 "_shouldBeSelected": true,
                                 "_graphic": {
                                     "large": "course/en/images/single_width.jpg",
                                     "small": "course/en/images/single_width.jpg",
                                     "alt": "Placeholder graphic."
                                 }
                             },
                             {
                                 "text": "Option 3",
                                 "_shouldBeSelected": true,
                                 "_graphic": {
                                     "large": "course/en/images/single_width.jpg",
                                     "small": "course/en/images/single_width.jpg",
                                     "alt": "Placeholder graphic."
                                 }
                             }
                         ],
                         "_feedback": {
                             "title": "Feedback",
                             "correct": "Correct feedback text.<br><br>That’s correct. <strong>Option 2</strong> is what we were looking for!",
                             "_incorrect": {
                                 "final": "Incorrect feedback text.<br><br>Sorry, that’s not right. In fact <strong>Option 2</strong> is what we were looking for (the clue was in the instruction text!)."
                             }
                         },
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Matching',
                    title: 'Add Matching',
                    className: 'jsoneditor-type-object',
                    field: 'MatchingTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                         "_type": "component",
                         "_component": "matching",
                         "_classes": "",
                         "_layout": "full",
                         "_attempts": 1,
                         "_questionWeight": 1,
                         "_canShowModelAnswer": true,
                         "_shouldDisplayAttempts": false,
                         "_isRandom": true,
                         "title": "Matching",
                         "displayTitle": "Matching",
                         "body": "Can you identify some of the key facts and figures associated with the Adapt Open Source project?",
                         "instruction": "Choose an option from each dropdown list and select Submit.",
                         "placeholder": "Select an option",
                         "_items": [
                             {
                                 "text": "The Adapt Open Source project was formed in:",
                                 "_options": [
                                     {
                                         "text": "2008",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "2010",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "2013",
                                         "_isCorrect": true
                                     },
                                     {
                                         "text": "2015",
                                         "_isCorrect": false
                                     }
                                 ]
                             },
                             {
                                 "text": "Adapt adheres to level 'AA' of the <abbr title='Web Content Accessibility Guidelines'>WCAG</abbr> version 2, but when were these published?",
                                 "_options": [
                                     {
                                         "text": "2008",
                                         "_isCorrect": true
                                     },
                                     {
                                         "text": "2010",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "2013",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "2015",
                                         "_isCorrect": false
                                     }
                                 ]
                             },
                             {
                                 "text": "Which of these languages would benefit from using the recent addition of Right To Left (RTL) language support within Adapt?",
                                 "_options": [
                                     {
                                         "text": "Portuguese",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "Hebrew",
                                         "_isCorrect": true
                                     },
                                     {
                                         "text": "Finnish",
                                         "_isCorrect": false
                                     },
                                     {
                                         "text": "Esperanto",
                                         "_isCorrect": false
                                     }
                                 ]
                             }
                         ],
                         "_feedback": {
                             "title": "Feedback",
                             "correct": "Correct answer feedback.<br><br>Yes, that’s right. Adapt was established as an Open Source project in 2013. The Web Accessibility Initiative (WAI) published the WCAG 2.0 guidelines in 2008 and Hebrew is the only language of the four shown which reads right to left.<br><br><em>Component facts: The <strong>matching</strong> component lets you match a series of questions or statements with the corresponding options from the dropdown box. Component is either single or spanned.</em>",
                             "_partlyCorrect": {
                                 "final": "Partially correct answer feedback.<br><br>That’s partially correct. Adapt was established as an Open Source project in 2013. The Web Accessibility Initiative (WAI) published the WCAG 2.0 guidelines in 2008 and Hebrew is the only language of the four shown which reads right to left.<br><br><em>Component facts: The <strong>matching</strong> component lets you match a series of questions or statements with the corresponding options from the dropdown box. Component is either single or spanned.</em>"
                             },
                             "_incorrect": {
                                 "final": "Incorrect answer feedback.<br><br>Sorry, that’s not right. Adapt was established as an Open Source project in 2013. The Web Accessibility Initiative (WAI) published the WCAG 2.0 guidelines in 2008 and Hebrew is the only language of the four shown which reads right to left.<br><br><em>Component facts: The <strong>matching</strong> component lets you match a series of questions or statements with the corresponding options from the dropdown box. Component is either single or spanned.</em>"
                             }
                         },
                         "_pageLevelProgress": {
                             "_isEnabled": true,
                             "_isCompletionIndicatorEnabled": false
                         }
                    }
               },
               {
                    text: 'Conversation',
                    title: 'Add Conversation',
                    className: 'jsoneditor-type-object',
                    field: 'ConversationTemplate',
                    value: {
                         "_id": "1-0-1-10-10",
                         "_parentId": "1-0-1-10-00",
                        "_type": "component",
                        "_component": "conversation",
                        "_classes": "",
                        "_layout": "full",
                        "title": "Conversation",
                        "displayTitle": "Conversation",
                        "body": "This is the Conversation component body. You can introduce your graphic or you may just want to let the graphics do the talking.<br><br>Component can either be single or spanned.",
                        "instruction": "",
                        "people": {
                          "me": {
                            "fullName": "Googler",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_01.png"
                          },
                          "client": {
                            "fullName": "Client",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_02.png"
                          },
                          "other": {
                            "fullName": "Client",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_03.png"
                          },
                          "other2": {
                            "fullName": "Client",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_04.png"
                          },
                          "other3": {
                            "fullName": "Client",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_05.png"
                          },
                          "other4": {
                            "fullName": "Client",
                            "jobTitle": "",
                            "avatar": "course/en/images/conversation/1-1-1-30-10/1-1-1-30-10_img_06.png"
                          }
                        },
                        "_items": [
                          {
                            "person": "me",
                            "message": "Oxycodone – OxyContin®, Percocet®"
                          },
                          {
                            "person": "client",
                            "message": "Hydrocodone – Vicodin®"
                          },
                          {
                            "person": "other",
                            "message": "Oxymorphone – Opana®"
                          },
                          {
                            "person": "other2",
                            "message": "Morphine – Kadian®, Avinza® )"
                          },
                          {
                            "person": "other3",
                            "message": "Codeine"
                          },
                          {
                            "person": "other4",
                            "message": "Fentanyl – Duragesic"
                          }
                        ],
                        "_pageLevelProgress": {
                          "_isEnabled": true
                        }
                    }
               }
          ]
       }

       return options.templates;
}
