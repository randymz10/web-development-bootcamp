## Computer File Paths

The File path is the locations of our file inside of the computer, this is divide in two types the absolute path and the relative path. The absolute path is the location relative of the hard drive or root directory and the relative path is the location relative at the file location.

In the web development often use the relative path and is a best practice use the '.' or '..' at the begining of the path. The dot '.' means the current directory where is store our file and de double dot '..' is a level up of our directory. Also is posible to begin the path without to put dot, but sometimes this can fail, the recomend is always use dot or double dot at the begining of the path. 

## Web Pages (Building Multi-Page Websites)

Generally we have several documents HTML inside our project called websites and we can to navigate between it using anchor tags. Normally in a project we have the index.html that is the inicial point that user access in our project, from here he can to access to the rest web pages, the rest of pages are store in a directory called public and other statics resources as images for example are store in a assets directory.

## The HMTL Boilerplate (Understanding HTML structure)

HTML tags are generally made up of an opening tag, a closing tag and within the code that will be formatted; There are also labels that do not have a closure, these are called self-closing labels. HTML tags can also be placed attributes that modify the behavior of the tag, in the documentation we can see the number of attributes that an HTML tag can have.

An HTML document has the following sections or boilerplate that are essential. First: the `<!DOCTYPE html>` tag that declares the version of HTML we are using, version 5 being the latest version and the one specified with the tag. Second, the `<html></hmtl>` tag where all the elements of the HTML document are written. Third, within the `<head></head>` tag where the metadata or information that is not visible to the user is placed, such as the format of the text with the `<meta charset="UTF- 8">` or the title seen from the tab bar with the `<title></title>` tag. Fourth we have the body of the HTML document that is specified with the `<body></body>` tag where it spends most of the time and is where all the visual content of the HTML document goes.

It is also important to add indentation between one tag and another to identify the sections of the HTML document, that is, which tags are inside others. This is also called indentation.
- An HTML document would look like this:

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <metacharset="UTF-8">
         <title>Document</title>
     </head>
     <body>
        
     </body>
     </html>
     ```
     