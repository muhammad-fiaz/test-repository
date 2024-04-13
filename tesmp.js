export = (app: Application) => {
app.on('pull_request', async (context) => {
const payload = context.payload
// ...
})
}
