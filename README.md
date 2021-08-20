## Question 1

## TASK 1:

Create an application similar to Twitter. DO NOT BUILD A USER INTERFACE, just a backend exposing a well-formed API. You can use anything you want for the server and storage layer. The API must adhere to REST standards. Focus on completing the basic functionality before moving on to the rest. The code you write is expected to be good quality, it should:

- Have correct formatting

- Have resilient error handling

- Exceptions should appropriate handling

- Architecture should be scalable, easy to maintain

- Tricky parts of the code should have proper documentation

\*\* Database queries should be efficient

### Section 1

- User registration using unique username and a password

- User login (Including session maintenance using any means you're comfortable with)

- Unit tests for these basic methods

These two APIs must be perfect. DO NOT move on to the remainder of the assignment until these are completed. If either of these APIs are missing or incomplete, the remainder of the assignment WILL NOT be scored at all.

### Section 2

Start _only_ once the Basic Functionality is complete. Complete these _in the order specified_

- Chat with other users

- Create, read, update, delete tweet (Twitter doesn't support update, can you?)

- Unit/Integration tests for _all_ endpoints you've built so far (Basic & Extended Functionality)

### Section 3

Start _only_ once section 1 and 2 functionality is complete. The following endpoints are for bonus points, and you SHOULD NOT attempt them until all previous requirements are completed.

- Like/unlike a tweet

- Retweet

- Threading

If you can implement message queues/ real-time queries then go ahead and make a feature that’s not listed above. You can skip section 2 and 3 of the tests if you have an idea for these.
