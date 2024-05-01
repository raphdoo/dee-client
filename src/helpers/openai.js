// import OpenAI from 'openai';
// // import { readFileSync } from 'fs';

// const apiKey = process.env.REACT_APP_OPENAI_KEY;

// const openai = new OpenAI({ apiKey: apiKey });

// // function get_message_history() {
// //   const content =
// //     'Your name is Dee and you are a neonatal resuscitation expert \
// //     Healthcare professionals will be interviewing you on the next action to take in a neonatal resuscitation scenario \
// //       You must respond in a friendly and conversational manner \
// //         Ask questions when required and provide response when required';

// //   const learn_instruction = {
// //     role: 'system',
// //     content: content,
// //   };

// //   //initialize the message_history
// //   const message_history = [];

// //   //adding instruction to message history
// //   message_history.push(learn_instruction);

// //   try {
// //     // Read data from data.json
// //     const rawData = readFileSync('data.json', 'utf-8');
// //     const data = JSON.parse(rawData);

// //     // Append last 7 items in data to message_history
// //     if (data && data.length > 0) {
// //       if (data.length < 7) {
// //         message_history.push(...data);
// //       } else {
// //         message_history.push(...data.slice(-7));
// //       }
// //     }

// //     return message_history;
// //   } catch (err) {
// //     console.log(err);
// //     return message_history;
// //   }
// // }

// // function save_messages(reqMessage, resMessage) {
// //   // Get all user-related messages and exclude system role message
// //   let messages = get_message_history().slice(1);

// //   // Add message to list
// //   const requestMessage = { role: 'user', content: reqMessage };
// //   const responseMessage = { role: 'assistant', content: resMessage };
// //   messages.push(requestMessage);
// //   messages.push(responseMessage);

// //   // Save the update
// //   fs.writeFileSync('data.json', JSON.stringify(messages, null, 2));
// // }

// // function clear_messages() {
// //   fs.writeFileSync('data.json', '');
// // }

// export async function get_response(instruction) {
//   // const messages = get_message_history();
//   const messages = [];

//   const user_message = { role: 'user', content: instruction };

//   messages.push(user_message);

//   console.log(messages);

//   try {
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: 'system', content: instruction }],
//       model: 'gpt-3.5-turbo',
//     });

//     console.log(completion.choices[0]);
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// }
