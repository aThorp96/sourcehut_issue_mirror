 core = require('@actions/core');
const github = require('@actions/github');
var request = require('request');

try {
    /**
    const title = core.getInput('title');
    const body = core.getInput('body');
    const submitter = core.getInput('submitter');
    const tracker_owner = core.getInput('tracker-owner');
    const tracker_name = core.getInput('tracker-name');
    const oauth_token = core.getInput('oauth-token');
    **/

    const title = "Testing from JS";
    const body = core.getInput('body');
    const submitter = core.getInput('submitter');
    const tracker_owner = core.getInput('tracker-owner');
    const tracker_name = core.getInput('tracker-name');
    const oauth_token = core.getInput('oauth-token');

	uri = `https://todo.sr.ht/api/user/${tracker_owner}/trackers/${tracker_name}/tickets`;
	var description = `Issue mirrored from github.\n\nOpened by [${submitter}](https://github.com/${submitter}).\n\n${body}`

	request(
		{
    		method: 'POST',
    		url: uri,
    		headers: {
        		'Authorization': `token ${oauth_token}`,
        		'Content-Type': 'application/json'
    		},
			body: JSON.stringify({
        		'title': title,
        		'description': description
    		})
		},
		(error, res, body) => {
    		if (error) {
        		console.error(error)
        		return
    		}

    		console.log(`statusCode: ${res.statusCode}`)
    		if (res.statusCode != 201) {
            	core.setFailed(`Failed to post: ${body}`);
            	return
    		}
    		console.log("Successfully opened issue")

        }
    )


} catch (error) {
      core.setFailed(error.message);
}
