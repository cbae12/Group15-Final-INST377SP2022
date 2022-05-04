export default 'SELECT `Group15_Spotify`.`artists`.`name` AS `name`,count(`Group15_Spotify`.`albums`.`album_name`) AS `album_count`FROM((`Group15_Spotify`.`artists` JOIN `Group15_Spotify`.`artist_albums` ON ((`Group15_Spotify`.`artists`.`artist_id` = `Group15_Spotify`.`artist_albums`.`artist_id`))) JOIN `Group15_Spotify`.`albums` ON ((`Group15_Spotify`.`albums`.`album_id` = `Group15_Spotify`.`artist_albums`.`album_id`))) group by `Group15_Spotify`.`artists`.`name` order by `album_count` desc';