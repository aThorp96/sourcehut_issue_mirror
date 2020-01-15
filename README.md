# Sourcehut Issue Mirror

This action uses the [sourcehut todo API](https://man.sr.ht/todo.sr.ht/api.md) to add a ticket to a tracker.
Its inteded use is to mirror new issues from github to sourcehut.

## Inputs


### `title`

Title of the issue
    
### `body`

Body of the issue

### `submitter`

Username of the submitter
    
### `tracker-owner`

Account name of the tracker owner. *Must be proceeded with "~"*
    
### `tracker-name`

Name of the tracker
    
### `oauth-token`

OAuth Token for sr.ht

### `repo`

Label for mirrored ticket

## Example usage

```yml
- uses: athorp96/sourcehut_issue_mirror@master
  with:
    title: ${{ github.event.issue.title}
    body: ${{ github.event.issue.body}}
    submitter: ${{ github.event.issue.user.login }}
    tracker-owner: "~your-sr.ht-username"
    tracker-name: "my-app-tracker"
    oauth-token: ${{ secrets.SRHT_OAUTH_TOKEN }}
    label: ${{ github.event.repository.name }}
```
	
