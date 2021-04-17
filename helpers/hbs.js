const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
          let new_str = str + ' '
          new_str = str.substr(0, len)
          new_str = str.substr(0, new_str.lastIndexOf(' '))
          new_str = new_str.length > 0 ? new_str : str.substr(0, len)
          return new_str + '...'
        }
        return str
    },
    stripTags: function (input) {
        // let para = .replace(/&nbsp;/g, ' ')
        return input.replace(/<(?:.|\n)*?>/gm, ' ').replace(/&nbsp;/g, ' ')
    },
    editIcon: function (storyUser, loggedUser, storyId, floating='true') {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
            if (floating) {
                return `<a href="/stories/edit/${storyId}" class="btn btn-warning"><i class="fas fa-pencil-alt"></i> Edit</a>`
            } else {
                return `<a href="/stories/edit/${storyId}" class="btn btn-warning"><i class="fas fa-pencil-alt"></i> Edit This Story</a>`
            }
            
        } else {
            return ''
        }
    },
    select: function (selected, options) {
        return options
            .fn(this)
            .replace(
            new RegExp(' value="' + selected + '"'),
            '$& selected="selected"'
            )
            .replace(
            new RegExp('>' + selected + '</option>'),
            ' selected="selected"$&'
            )
    },
}