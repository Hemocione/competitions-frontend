const Forms = () => (
    <form action="/action_page.php">
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="Joao" /><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Silva" /><br />
        <label for="lname">Time:</label><br />
        <input type="text" id="team" name="team" value="Alpha" /><br /><br />
        <input type="submit" value="Submit" />
    </form>
)

export default Forms